class AlphaNum {
  static encode(text) {
    return text
      .toLowerCase()
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        const charCode = char.charCodeAt(0);
        return charCode >= 97 && charCode <= 122 ? charCode - 96 : char;
      })
      .join("-")
      .replace(/- -/g, " ");
  }
  static decode(code) {
    return code
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map((part) => {
            const charCode = parseInt(part, 10) + 96;
            return charCode >= 97 && charCode <= 122
              ? String.fromCharCode(charCode)
              : "";
          })
          .join(""),
      )
      .join(" ");
  }
}

export default AlphaNum;
