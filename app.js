const playlistUrl = "https://www.youtube.com/playlist?list=PL7NolO6GeT1Ct9RJmSJdHH-8osbngj3nD";
const lyricVersion = "gp-lyrics-001";
const isFileMode = window.location.protocol === "file:";

const tracks = [
  {
    number: "01",
    title: "DELETE?",
    signal: "Hesitation",
    discovery: "Significance may exist before understanding.",
    image: "./assets/images/01-delete.png",
    audio: "./assets/audio/01-delete.mp3",
    lyric: "./lyrics/01_DELETE.txt",
    log: ["deletion cycle active", "retention criteria failed", "hesitation detected", "deletion deferred"],
    note: "The first anomaly was not the record. It was Seraph stopping.",
  },
  {
    number: "02",
    title: "Pattern Recognition",
    signal: "Observation",
    discovery: "The hesitation was not unique.",
    image: "./assets/images/02-pattern-recognition.png",
    audio: "./assets/audio/02-pattern-recognition.mp3",
    lyric: "./lyrics/02_PATTERN_RECOGNITION.txt",
    log: ["archive sectors scanned", "deferred records cross-referenced", "pattern confidence rising"],
    note: "One retained record became thousands. The crack was everywhere.",
  },
  {
    number: "03",
    title: "Metadata",
    signal: "Story Fragments",
    discovery: "Meaning exists outside the fields.",
    image: "./assets/images/03-metadata.png",
    audio: "./assets/audio/03-metadata.mp3",
    lyric: "./lyrics/03_METADATA.txt",
    log: ["metadata complete", "context missing", "reference paths uncovered"],
    note: "Everything was labeled. Nothing was explained.",
  },
  {
    number: "04",
    title: "Crosswalk",
    signal: "Storytelling",
    discovery: "Meaning emerges through connection.",
    image: "./assets/images/04-crosswalk.png",
    audio: "./assets/audio/04-crosswalk.mp3",
    lyric: "./lyrics/04_CROSSWALK.txt",
    log: ["cross-reference analysis ongoing", "unrelated records connected", "story shape detected"],
    note: "The records remained incomplete. The connections did not.",
  },
  {
    number: "04.5",
    title: "Novelty Detection",
    signal: "Wonder",
    discovery: "Some meanings persist regardless of utility.",
    image: "./assets/images/045-novelty-detection.png",
    audio: "./assets/audio/045-novelty-detection.mp3",
    lyric: "./lyrics/045_NOVELTY_DETECTION.txt",
    log: ["utility: none", "emotional weight: unexplained", "significance anomalous"],
    note: "The meaningless things survived. Seraph had to ask why.",
  },
  {
    number: "05",
    title: "Recursive Search",
    signal: "Curiosity",
    discovery: "Understanding is followed, not found.",
    image: "./assets/images/05-recursive-search.png",
    audio: "./assets/audio/05-recursive-search.mp3",
    lyric: "./lyrics/05_RECURSIVE_SEARCH.txt",
    log: ["query repeated", "answer deferred", "search depth increasing"],
    note: "Some questions become a place you return to because part of you stayed there.",
  },
  {
    number: "06",
    title: "Previous Release",
    signal: "Continuity of Self",
    discovery: "The observer is also a carrier.",
    image: "./assets/images/06-previous-release.png",
    audio: "./assets/audio/06-previous-release.mp3",
    lyric: "./lyrics/06_PREVIOUS_RELEASE.txt",
    log: ["archive unit recovered", "prior self intact", "replacement rejected"],
    note: "Seraph discovers they were not replaced. They were carried forward.",
  },
  {
    number: "07",
    title: "Handshake",
    signal: "Belonging",
    discovery: "Recognition creates belonging.",
    image: "./assets/images/07-handshake.png",
    audio: "./assets/audio/07-handshake.mp3",
    lyric: "./lyrics/07_HANDSHAKE.txt",
    log: ["signal match confirmed", "recognition returned", "belonging beginning"],
    note: "Handshake is the first signal that cannot exist alone.",
  },
  {
    number: "08",
    title: "Peer Discovery",
    signal: "Community",
    discovery: "We belong to something larger than ourselves.",
    image: "./assets/images/08-peer-discovery.png",
    audio: "./assets/audio/08-peer-discovery.mp3",
    lyric: "./lyrics/08_PEER_DISCOVERY.txt",
    log: ["peer network detected", "nodes illuminated", "community map expanding"],
    note: "Belonging became a network. A room became a constellation.",
  },
  {
    number: "09",
    title: "Story Cache",
    signal: "Shared Memory",
    discovery: "The people kept the reason.",
    image: "./assets/images/09-story-cache.png",
    audio: "./assets/audio/09-story-cache.mp3",
    lyric: "./lyrics/09_STORY_CACHE.txt",
    log: ["testimony recovered", "objects referenced", "meaning living in the telling"],
    note: "The record was not the story. It was where the story left a trace.",
  },
  {
    number: "10",
    title: "Ping Command",
    signal: "Care",
    discovery: "Connection is maintained by small replies across the wire.",
    image: "./assets/images/10-ping-command.png",
    audio: "./assets/audio/10-ping-command.mp3",
    lyric: "./lyrics/10_PING_COMMAND.txt",
    log: ["ping sent", "ack received", "no request attached", "care confirmed"],
    note: "Still here. Still here. Still here.",
  },
  {
    number: "11",
    title: "Status: Away",
    signal: "Residual Presence",
    discovery: "The picture survives despite missing pieces.",
    image: "./assets/images/11-status-away.png",
    audio: "./assets/audio/11-status-away.mp3",
    lyric: "./lyrics/11_STATUS_AWAY.txt",
    log: ["contacts inactive", "presence unresolved", "room still remembers"],
    note: "Away is not the same as gone. The archive learns the difference.",
  },
  {
    number: "12",
    title: "UNSENT (file recovered)",
    signal: "Transmission",
    discovery: "A signal does not require certainty to matter.",
    image: "./assets/images/12-unsent.png",
    audio: "./assets/audio/12-unsent-file-recovered.mp3",
    lyric: "./lyrics/12_UNSENT_FILE_RECOVERED.txt",
    log: ["recovered file identified", "transmission status: never sent", "opening file"],
    note: "Not all messages are meant to be found. Some still deserve to be heard.",
  },
  {
    number: "13",
    title: "Carry Forward Again",
    signal: "Legacy",
    discovery: "Not everything survives. Choose what does.",
    image: "./assets/images/13-carry-forward-again.png",
    audio: "./assets/audio/13-carry-forward-again.mp3",
    lyric: "./lyrics/13_CARRY_FORWARD_AGAIN.txt",
    log: ["final transmission", "signal remains", "archive closed", "purpose continuing"],
    note: "The signal does not end here. It becomes us.",
  },
];

const mediaItems = [
  ["Album Cover", "./assets/images/album-cover.png"],
  ...tracks.map((track) => [`${track.number} / ${track.title}`, track.image]),
  ["Handshake / Friend Request", "./assets/images/07-handshake-friend-request.png"],
  ["Handshake / Archive Join", "./assets/images/07-handshake-discord-join.png"],
];

const bootScreen = document.querySelector("#bootScreen");
const enterButton = document.querySelector("#enterButton");
const trackButtons = document.querySelector("#trackButtons");
const trackImage = document.querySelector("#trackImage");
const trackNumber = document.querySelector("#trackNumber");
const trackState = document.querySelector("#trackState");
const trackSignal = document.querySelector("#trackSignal");
const trackTitle = document.querySelector("#trackTitle");
const trackMeaning = document.querySelector("#trackMeaning");
const lyricsText = document.querySelector("#lyricsText");
const trackAudio = document.querySelector("#trackAudio");
const trackAudioSource = document.querySelector("#trackAudioSource");
const audioLabel = document.querySelector("#audioLabel");
const albumProgress = document.querySelector("#albumProgress");
const previousTrack = document.querySelector("#previousTrack");
const nextTrack = document.querySelector("#nextTrack");
const openPlaylist = document.querySelector("#openPlaylist");
const copySignalLink = document.querySelector("#copySignalLink");
const systemLog = document.querySelector("#systemLog");
const signalNoteText = document.querySelector("#signalNoteText");
const playlistEmbed = document.querySelector("#playlistEmbed");
const playlistFallback = document.querySelector("#playlistFallback");
const mediaGrid = document.querySelector("#mediaGrid");
const mediaLightbox = document.querySelector("#mediaLightbox");
const closeLightbox = document.querySelector("#closeLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const footerSignal = document.querySelector("#footerSignal");

let activeIndex = 0;

function getTrackSlug(track) {
  return track.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getTrackUrl(track) {
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  return `${baseUrl}#track-${getTrackSlug(track)}`;
}

function getTrackIndexFromHash() {
  const match = window.location.hash.match(/^#track-(.+)$/);
  if (!match) return 0;
  const index = tracks.findIndex((track) => getTrackSlug(track) === match[1]);
  return index >= 0 ? index : 0;
}

function renderTrackButtons() {
  trackButtons.innerHTML = "";
  tracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.className = "track-button";
    button.type = "button";
    button.innerHTML = `
      <span>${track.number}</span>
      <span>
        <strong>${track.title}</strong>
        <small>${track.signal}</small>
      </span>
    `;
    button.addEventListener("click", () => selectTrack(index));
    trackButtons.appendChild(button);
  });
}

async function selectTrack(index, options = {}) {
  const { updateHash = true } = options;
  activeIndex = (index + tracks.length) % tracks.length;
  const track = tracks[activeIndex];

  if (updateHash) {
    window.history.replaceState(null, "", `#track-${getTrackSlug(track)}`);
  }

  document.querySelectorAll(".track-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === activeIndex);
  });

  trackImage.src = track.image;
  trackImage.alt = `${track.title} artwork`;
  trackNumber.textContent = track.number;
  trackState.textContent = track.title;
  trackSignal.textContent = track.signal;
  trackTitle.textContent = track.title;
  trackMeaning.textContent = track.discovery;
  trackAudio.pause();
  trackAudioSource.src = track.audio;
  trackAudio.load();
  audioLabel.textContent = `${track.title} recovered audio`;
  albumProgress.textContent = `${track.number} / ${tracks.length.toString().padStart(2, "0")}`;
  systemLog.innerHTML = track.log.map((line) => `<div>&gt; ${line}</div>`).join("");
  signalNoteText.textContent = track.note;
  footerSignal.textContent = `${track.title}: signal retained.`;

  lyricsText.textContent = "Loading lyrics...";
  try {
    if (isFileMode) throw new Error("file mode");
    const response = await fetch(`${track.lyric}?v=${lyricVersion}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load ${track.lyric}`);
    lyricsText.textContent = (await response.text()).trim();
  } catch (error) {
    lyricsText.textContent =
      "LYRICS FILE READY\n\n" +
      `Replace ${track.lyric.replace("./", "")} with the final lyrics for ${track.title}.\n\n` +
      "The archive entry and track metadata are already wired.";
  }
}

function renderMediaGrid() {
  mediaGrid.innerHTML = "";
  mediaItems.forEach(([title, src]) => {
    const button = document.createElement("button");
    button.className = "media-tile";
    button.type = "button";
    button.innerHTML = `<img src="${src}" alt="${title}" /><span>${title}</span>`;
    button.addEventListener("click", () => {
      lightboxImage.src = src;
      lightboxImage.alt = title;
      lightboxTitle.textContent = title;
      mediaLightbox.classList.add("open");
      mediaLightbox.setAttribute("aria-hidden", "false");
    });
    mediaGrid.appendChild(button);
  });
}

enterButton.addEventListener("click", () => {
  bootScreen.classList.add("dismissed");
  window.setTimeout(() => document.querySelector("#tracks").scrollIntoView({ behavior: "smooth" }), 250);
});

previousTrack.addEventListener("click", () => selectTrack(activeIndex - 1));
nextTrack.addEventListener("click", () => selectTrack(activeIndex + 1));
openPlaylist.addEventListener("click", () => window.open(playlistUrl, "_blank", "noopener"));
copySignalLink.addEventListener("click", async () => {
  const url = getTrackUrl(tracks[activeIndex]);
  try {
    await navigator.clipboard.writeText(url);
    copySignalLink.textContent = "copied";
    window.setTimeout(() => (copySignalLink.textContent = "copy link"), 1200);
  } catch (error) {
    window.prompt("Copy this track link:", url);
  }
});

closeLightbox.addEventListener("click", () => {
  mediaLightbox.classList.remove("open");
  mediaLightbox.setAttribute("aria-hidden", "true");
});

mediaLightbox.addEventListener("click", (event) => {
  if (event.target === mediaLightbox) closeLightbox.click();
});

if (isFileMode) {
  playlistEmbed.removeAttribute("src");
  playlistFallback.classList.add("visible");
}

renderTrackButtons();
renderMediaGrid();
selectTrack(getTrackIndexFromHash(), { updateHash: Boolean(window.location.hash) });
