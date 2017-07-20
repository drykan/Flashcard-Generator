function ClozeCard(fullText, cloze) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "...");
}

module.exports = ClozeCard;