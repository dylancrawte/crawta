import { useEffect, useRef, useState } from "react"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"

const tracks = [
  {
    id: "1",
    num: "01",
    name: "Complacent",
    meta: "2026 · Demo",
    src: "/audio/complacent-demo.mp3",
    spotifyUrl: "https://open.spotify.com/artist/0uetZYfTX6zFzEVNT06pNZ?si=o9msvs46Qnq9hrGpfs5zpw",
    streams: "42.7K",
  },
  {
    id: "2",
    num: "02",
    name: "Mother Earth",
    meta: "2026 · Demo",
    src: "/audio/mother-earth.mp3",
    spotifyUrl: "https://open.spotify.com/",
    streams: "9.1K",
  },
  {
    id: "3",
    num: "03",
    name: "White Noise",
    meta: "2026 · Demo",
    src: "/audio/white-noise-demo.mp3",
    spotifyUrl: "https://open.spotify.com/",
    streams: "15.8K streams",
  },
  {
    id: "4",
    num: "04",
    name: "Iris",
    meta: "2026 · Demo",
    src: "/audio/iris-demo.mp3",
    spotifyUrl: "https://open.spotify.com/",
    streams: "7.3K streams",
  },
] as const

const previousTracks = [
  {
    id: "p1",
    num: "01",
    name: "Prospects",
    meta: "Electronic",
    src: "/audio/prospects-master.wav",
    linkUrl: "https://open.spotify.com/track/2enVbhmGydv09lge4me8kp",
    platform: "spotify",
    streams: "42.7K",
  },
  {
    id: "p2",
    num: "02",
    name: "Hyph Mngo edit",
    meta: "Electronic",
    src: "/audio/hyph-mngo-edit.wav",
    linkUrl:
      "https://soundcloud.com/nomoreparties/crawta-hype-mango?in=crawta/sets/crawta-releases",
    platform: "soundcloud",
    streams: "26.4K",
  },
  {
    id: "p3",
    num: "03",
    name: "Requiem",
    meta: "Electronic",
    src: "/audio/requiem-master.wav",
    linkUrl:
      "https://soundcloud.com/ducklandbristol/crawta-requiem-free-download?in=crawta/sets/crawta-releases",
    platform: "soundcloud",
    streams: "4.3K",
  },
] as const

const allTracks = [...tracks, ...previousTracks] as const

function PlayIcon() {
  return (
    <svg viewBox="0 0 10 12" width="9" height="12" aria-hidden>
      <polygon points="0,0 10,6 0,12" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 10 12" width="10" height="12" aria-hidden>
      <rect x="0" y="0" width="3" height="12" />
      <rect x="7" y="0" width="3" height="12" />
    </svg>
  )
}

function SoundCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M1.175 12.225c-.050 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.051.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1zm-.899.828c-.06 0-.109.05-.116.112l-.16 1.326.16 1.29c.007.063.055.11.116.11.06 0 .11-.047.116-.11l.184-1.29-.184-1.326c-.007-.063-.057-.112-.116-.112zm1.81-.474c-.064 0-.12.057-.127.125l-.204 1.8.204 1.74c.007.07.063.124.127.124.063 0 .12-.055.126-.124l.233-1.74-.233-1.8c-.007-.068-.063-.125-.126-.125zm.907-.295c-.077 0-.143.066-.15.146l-.176 2.095.176 2.016c.007.082.073.145.15.145.078 0 .144-.063.15-.145l.2-2.016-.2-2.095c-.006-.08-.072-.146-.15-.146zm.93-.176c-.09 0-.166.076-.172.17l-.15 2.27.15 2.168c.006.094.082.168.172.168.09 0 .167-.074.172-.168l.17-2.168-.17-2.27c-.005-.094-.082-.17-.172-.17zm.937-.105c-.102 0-.188.086-.194.193l-.125 2.375.125 2.258c.006.108.092.19.194.19.103 0 .189-.082.194-.19l.14-2.258-.14-2.375c-.005-.107-.09-.193-.194-.193zm.958-.05c-.115 0-.212.098-.217.217l-.1 2.425.1 2.318c.005.12.102.215.217.215.116 0 .212-.096.217-.215l.115-2.318-.115-2.425c-.005-.12-.1-.217-.217-.217zm.96-.02c-.128 0-.236.108-.24.24l-.077 2.445.077 2.356c.004.133.112.238.24.238.13 0 .237-.105.24-.238l.088-2.356-.088-2.444c-.003-.133-.11-.24-.24-.24zm.966-.004c-.142 0-.262.12-.265.265l-.052 2.45.052 2.37c.003.145.123.262.265.262.143 0 .262-.117.265-.262l.058-2.37-.058-2.45c-.003-.145-.122-.265-.265-.265zm.97.022c-.155 0-.283.13-.285.288l-.03 2.427.03 2.38c.002.158.13.285.285.285.157 0 .284-.127.285-.285l.033-2.38-.033-2.427c-.001-.158-.128-.288-.285-.288zm.972.056c-.17 0-.31.14-.31.313l-.006 2.37.006 2.384c0 .172.14.31.31.31.173 0 .312-.138.312-.31l.007-2.384-.007-2.37c0-.172-.14-.313-.312-.313zM20.3 8.498c-.343 0-.674.07-.975.195-.203-2.336-2.137-4.16-4.52-4.16-1.154 0-2.208.43-3.003 1.134v9.568l.003.095c.007.452.374.813.827.813H20.3c.93 0 1.685-.756 1.685-1.686V10.184c0-.93-.755-1.686-1.685-1.686z" />
    </svg>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 12 12c6.627 0 12-5.373 12-12A12 12 0 0 0 12 0Zm5.503 17.316a.747.747 0 0 1-1.028.247c-2.817-1.721-6.363-2.111-10.543-1.159a.748.748 0 0 1-.333-1.458c4.574-1.043 8.5-.596 11.657 1.333a.748.748 0 0 1 .247 1.037Zm1.468-3.268a.935.935 0 0 1-1.287.309c-3.225-1.983-8.139-2.558-11.954-1.401a.935.935 0 1 1-.542-1.79c4.35-1.319 9.757-.68 13.476 1.607a.935.935 0 0 1 .307 1.275Zm.126-3.404C15.23 8.35 8.852 8.14 5.162 9.269a1.122 1.122 0 1 1-.656-2.146c4.228-1.291 11.262-1.041 15.763 1.484a1.122 1.122 0 1 1-1.172 1.937Z" />
    </svg>
  )
}

export function Music() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const audioRefs = useRef<Record<string, HTMLAudioElement>>({})
  const [currentTimeById, setCurrentTimeById] = useState<Record<string, number>>(
    {}
  )
  const [durationById, setDurationById] = useState<Record<string, number>>({})
  const [headerRevealRef, headerRevealVisible] = useRevealOnScroll(0)
  const [tracksRevealRef, tracksRevealVisible] = useRevealOnScroll(1)
  const [previousHeaderRevealRef, previousHeaderRevealVisible] =
    useRevealOnScroll(2)
  const [linkRevealRef, linkRevealVisible] = useRevealOnScroll<HTMLDivElement>(3)

  useEffect(() => {
    const audioMap = audioRefs.current
    return () => {
      Object.values(audioMap).forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [])

  function formatTime(totalSeconds?: number) {
    if (!totalSeconds || Number.isNaN(totalSeconds)) return "—:—"
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  function getAudioForTrack(id: string) {
    const selectedTrack = allTracks.find((track) => track.id === id)
    if (!selectedTrack) return null

    if (!audioRefs.current[id]) {
      const audio = new Audio(selectedTrack.src)
      audio.preload = "metadata"
      audio.addEventListener("timeupdate", () => {
        setCurrentTimeById((prev) => ({ ...prev, [id]: audio.currentTime }))
      })
      audio.addEventListener("loadedmetadata", () => {
        setDurationById((prev) => ({ ...prev, [id]: audio.duration }))
      })
      audio.addEventListener("ended", () => {
        setPlayingId((currentId) => (currentId === id ? null : currentId))
        setCurrentTimeById((prev) => ({ ...prev, [id]: 0 }))
      })
      audioRefs.current[id] = audio
    }

    return audioRefs.current[id]
  }

  useEffect(() => {
    tracks.forEach((track) => {
      getAudioForTrack(track.id)
    })
  }, [])

  function toggleTrack(id: string) {
    const audio = getAudioForTrack(id)
    if (!audio) return

    if (playingId === id) {
      audio.pause()
      setPlayingId(null)
      return
    }

    if (playingId && audioRefs.current[playingId]) {
      const previousAudio = audioRefs.current[playingId]
      previousAudio.pause()
      previousAudio.currentTime = 0
    }

    setPlayingId(id)
    void audio.play().catch(() => {
      setPlayingId((currentId) => (currentId === id ? null : currentId))
    })
  }

  function seekTrack(id: string, clientX: number, width: number, left: number) {
    const audio = getAudioForTrack(id)
    if (!audio || !audio.duration) return

    const progress = Math.min(Math.max((clientX - left) / width, 0), 1)
    audio.currentTime = progress * audio.duration
    setCurrentTimeById((prev) => ({ ...prev, [id]: audio.currentTime }))

    if (playingId !== id) {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause()
      }
      setPlayingId(id)
      void audio.play().catch(() => {
        setPlayingId((currentId) => (currentId === id ? null : currentId))
      })
    }
  }

  return (
    <section id="music" className="crawta-section crawta-music-section">
      <div
        ref={headerRevealRef}
        className={`crawta-reveal${headerRevealVisible ? " visible" : ""}`}
      >
        <p className="crawta-section-label">Discography</p>
        <h2 className="crawta-section-title">Latest Demos</h2>
        <p className="crawta-music-sub">Grunge &nbsp;·&nbsp; Indie</p>
      </div>
      <div
        ref={tracksRevealRef}
        className={`crawta-tracks crawta-reveal${tracksRevealVisible ? " visible" : ""}`}
      >
        {tracks.map((t) => {
          const progressPercent = Math.min(
            ((currentTimeById[t.id] ?? 0) / (durationById[t.id] || 1)) * 100,
            100
          )

          return (
            <button
              key={t.id}
              type="button"
              className={`crawta-track${playingId === t.id ? " playing" : ""}`}
              onClick={() => toggleTrack(t.id)}
            >
              <div className="crawta-track-num">{t.num}</div>
              <div className="crawta-track-play" aria-hidden>
                <span className="crawta-play-btn">
                  {playingId === t.id ? <PauseIcon /> : <PlayIcon />}
                </span>
              </div>
              <div className="crawta-track-info">
                <div className="crawta-track-name">{t.name}</div>
                <div className="crawta-track-meta">{t.meta}</div>
              </div>
              <div className="crawta-track-duration">
                {formatTime(durationById[t.id] ?? undefined)}
              </div>
              <div
                className="crawta-track-progress"
                onClick={(event) => {
                  event.stopPropagation()
                  const rect = event.currentTarget.getBoundingClientRect()
                  seekTrack(t.id, event.clientX, rect.width, rect.left)
                }}
                aria-hidden
              >
                <div
                  className="crawta-track-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
                <div
                  className="crawta-track-progress-marker"
                  style={{ left: `${progressPercent}%` }}
                />
              </div>
            </button>
          )
        })}
      </div>

      <div
        ref={previousHeaderRevealRef}
        className={`crawta-music-previous crawta-reveal${previousHeaderRevealVisible ? " visible" : ""}`}
      >
        <h2 className="crawta-section-title">Previous Music</h2>
        <p className="crawta-music-sub">Electronic</p>
        <div className="crawta-tracks">
          {previousTracks.map((t) => {
            const progressPercent = Math.min(
              ((currentTimeById[t.id] ?? 0) / (durationById[t.id] || 1)) * 100,
              100
            )

            return (
              <button
                key={t.id}
                type="button"
                className={`crawta-track${playingId === t.id ? " playing" : ""}`}
                onClick={() => toggleTrack(t.id)}
              >
                <div className="crawta-track-num">{t.num}</div>
                <div className="crawta-track-play" aria-hidden>
                  <span className="crawta-play-btn">
                    {playingId === t.id ? <PauseIcon /> : <PlayIcon />}
                  </span>
                </div>
                <div className="crawta-track-info">
                  <div className="crawta-track-name">{t.name}</div>
                  <div className="crawta-track-meta">{t.meta}</div>
                </div>
                <div className="crawta-track-right">
                  <a
                    className="crawta-track-spotify"
                    href={t.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={`Open ${t.name} on ${t.platform === "spotify" ? "Spotify" : "SoundCloud"}`}
                  >
                    {t.platform === "spotify" ? (
                      <SpotifyIcon className="crawta-track-spotify-icon" />
                    ) : (
                      <SoundCloudIcon className="crawta-track-spotify-icon" />
                    )}
                  </a>
                  <div className="crawta-track-streams">{t.streams}</div>
                </div>
                <div
                  className="crawta-track-progress"
                  onClick={(event) => {
                    event.stopPropagation()
                    const rect = event.currentTarget.getBoundingClientRect()
                    seekTrack(t.id, event.clientX, rect.width, rect.left)
                  }}
                  aria-hidden
                >
                  <div
                    className="crawta-track-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                  <div
                    className="crawta-track-progress-marker"
                    style={{ left: `${progressPercent}%` }}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div
        ref={linkRevealRef}
        className={`crawta-music-links crawta-reveal${linkRevealVisible ? " visible" : ""}`}
      >
        <a
          className="crawta-sc-link"
          href="https://soundcloud.com/crawta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SoundCloudIcon className="crawta-sc-icon" />
          Listen on SoundCloud
        </a>
        <a
          className="crawta-sc-link"
          href="https://open.spotify.com/artist/0uetZYfTX6zFzEVNT06pNZ?si=P_97fDHKT5aypSSkdAzx8Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SpotifyIcon className="crawta-sc-icon" />
          Listen on Spotify
        </a>
      </div>
    </section>
  )
}
