export function startVibration(durationInMs: number): void {
  if (typeof navigator['vibrate'] === 'function') {
    navigator.vibrate(durationInMs);
  }
}
