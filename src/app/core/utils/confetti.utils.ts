export function fireHeartsConfetti(particleCount = 200): void {
  // @ts-ignore
  confetti({
    particleCount,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ['heart'],
    colors: ['FFC0CB', '883C3C', 'CB4848', 'ED7C7C'],
    scalar: 3,
  });
}

export function fireEmojiConfetti(particleCount = 200): void {
  // @ts-ignore
  confetti({
    particleCount,
    spread: 70,
    origin: { y: 0.6 },
    shapes: ['text'],
    shapeOptions: {
      text: {
        value: ['❤️', '♥️', '🐈'],
      },
    },
    scalar: 3,
  });
}
