document.getElementById('textarea').addEventListener('input', function() {
    const charCount = this.value.length;
    document.getElementById('charCount').textContent = charCount;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('textarea').value = '';
    document.getElementById('charCount').textContent = '0';
});