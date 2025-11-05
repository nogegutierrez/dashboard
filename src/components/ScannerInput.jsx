export function ScannerInput({ inputRef }) {
  return (
    <input
      ref={inputRef}
      id="hiddenScannerInput"
      className="hidden-input"
      autoComplete="off"
      autoFocus
    />
  );
}

