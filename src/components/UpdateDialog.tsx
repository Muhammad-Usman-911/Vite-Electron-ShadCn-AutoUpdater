import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Download, CheckCircle, AlertCircle, X } from "lucide-react"
import type { ProgressInfo } from 'electron-updater'

interface VersionInfo {
  version: string
  newVersion: string
  update: boolean
}

interface ErrorType {
  message: string
}

export function UpdateDialog() {
  const [open, setOpen] = useState(false)
  const [checking, setChecking] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isReadyToInstall, setIsReadyToInstall] = useState(false)
  const [versionInfo, setVersionInfo] = useState<VersionInfo>()
  const [updateError, setUpdateError] = useState<ErrorType>()
  const [progressInfo, setProgressInfo] = useState<Partial<ProgressInfo>>({ percent: 0 })

  const checkUpdate = async () => {
    setChecking(true)
    const result = await window.ipcRenderer.invoke('check-update')
    setProgressInfo({ percent: 0 })
    setChecking(false)
    setOpen(true)
    
    if (result?.error) {
      setUpdateAvailable(false)
      setUpdateError(result?.error)
    }
  }

  const startDownload = () => {
    setIsDownloading(true)
    window.ipcRenderer.invoke('start-download')
  }

  const installUpdate = () => {
    window.ipcRenderer.invoke('quit-and-install')
  }

  const onUpdateCanAvailable = useCallback((_event: Electron.IpcRendererEvent, arg1: VersionInfo) => {
    setVersionInfo(arg1)
    setUpdateError(undefined)
    
    // Can be update
    if (arg1.update) {
      setUpdateAvailable(true)
    } else {
      setUpdateAvailable(false)
    }
  }, [])

  const onUpdateError = useCallback((_event: Electron.IpcRendererEvent, arg1: ErrorType) => {
    setUpdateAvailable(false)
    setIsDownloading(false)
    setUpdateError(arg1)
  }, [])

  const onDownloadProgress = useCallback((_event: Electron.IpcRendererEvent, arg1: ProgressInfo) => {
    setProgressInfo(arg1)
  }, [])

  const onUpdateDownloaded = useCallback((_event: Electron.IpcRendererEvent, ...args: any[]) => {
    setProgressInfo({ percent: 100 })
    setIsDownloading(false)
    setIsReadyToInstall(true)
  }, [])

  useEffect(() => {
    // Get version information and whether to update
    window.ipcRenderer.on('update-can-available', onUpdateCanAvailable)
    window.ipcRenderer.on('update-error', onUpdateError)
    window.ipcRenderer.on('download-progress', onDownloadProgress)
    window.ipcRenderer.on('update-downloaded', onUpdateDownloaded)

    return () => {
      window.ipcRenderer.off('update-can-available', onUpdateCanAvailable)
      window.ipcRenderer.off('update-error', onUpdateError)
      window.ipcRenderer.off('download-progress', onDownloadProgress)
      window.ipcRenderer.off('update-downloaded', onUpdateDownloaded)
    }
  }, [])

  return (
    <>
      <Button disabled={checking} onClick={checkUpdate} variant="outline" size="sm">
        {checking ? 'Checking...' : 'Check for Updates'}
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed bottom-4 right-4 w-[360px] p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {isReadyToInstall ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : updateError ? (
                <AlertCircle className="h-5 w-5 text-red-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-blue-500" />
              )}
              {isReadyToInstall ? "Update Ready" : updateError ? "Update Error" : "Update Available"}
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-2" 
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <div className="space-y-4">
            {updateError ? (
              <div className="text-sm text-red-500">
                <p>Error downloading the latest version.</p>
                <p>{updateError.message}</p>
              </div>
            ) : updateAvailable && versionInfo ? (
              <div className="space-y-2">
                <p className="text-sm">New version available: v{versionInfo.newVersion}</p>
                <p className="text-xs text-muted-foreground">
                  v{versionInfo.version} → v{versionInfo.newVersion}
                </p>
              </div>
            ) : (
              <div className="text-sm">
                {versionInfo ? "You have the latest version." : "Checking for updates..."}
              </div>
            )}

            {isDownloading && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 animate-pulse" />
                  <span className="text-sm">Downloading update...</span>
                </div>
                <Progress value={progressInfo.percent} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">
                  {progressInfo.percent}%
                </p>
              </div>
            )}

            {!isDownloading && !isReadyToInstall && updateAvailable && (
              <Button 
                className="w-full" 
                onClick={startDownload}
              >
                Download Update
              </Button>
            )}

            {isReadyToInstall && (
              <Button 
                className="w-full" 
                onClick={installUpdate}
              >
                Install and Restart
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}