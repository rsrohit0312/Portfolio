"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ResumeDownloadProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ResumeDownload({ variant = "outline", size = "sm", className = "" }: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  // ✅ Google Drive file info
  const GOOGLE_DRIVE_FILE_ID = "17-MM10BUEwV5uwj3WAZ2090LzoE4xMP_"

  // ✅ Direct download URL
  const GOOGLE_DRIVE_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`

  // ✅ Preview link
  const GOOGLE_DRIVE_VIEW_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view?usp=sharing`

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      const link = document.createElement("a")
      link.href = GOOGLE_DRIVE_DOWNLOAD_URL
      link.download = "Rohit_Kumar_Singh_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Download started!",
        description: "Your resume download has begun.",
      })
    } catch (error) {
      window.open(GOOGLE_DRIVE_VIEW_URL, "_blank")

      toast({
        title: "Resume opened!",
        description: "Resume opened in new tab. You can download it from there.",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white bg-transparent ${className}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mr-2" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Resume
        </>
      )}
    </Button>
  )
}
