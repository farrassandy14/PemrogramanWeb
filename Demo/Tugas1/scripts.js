let display = document.getElementById('display');
let memoryValue = '';  // Memori untuk menyimpan angka yang digunakan dalam perhitungan

// Fungsi untuk menambahkan karakter ke layar tampilan
function appendCharacter(character) {
  display.value += character;
}

// Fungsi untuk menghapus semua karakter di layar tampilan (C)
function clearDisplay() {
  display.value = '';  // Menghapus tampilan saat ini
}

// Fungsi untuk menghapus karakter terakhir yang dimasukkan (CE - Clear Entry)
function clearEntry() {
  display.value = display.value.slice(0, -1);  // Menghapus satu karakter terakhir dari input
}

// Fungsi untuk menghapus semua karakter dan reset kalkulator (AC - All Clear)
function allClear() {
  display.value = '';  // Menghapus tampilan
  memoryValue = '';  // Reset memori kalkulator
}

// Fungsi untuk melakukan perhitungan
function calculate() {
  try {
    let expression = display.value;

    // Menangani kasus persentase: jika ditemukan angka diikuti dengan '%' (misal 10%)
    expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
      return `(${number} / 100)`;  // Mengonversi persentase menjadi desimal
    });

    // Gantikan simbol '^' dengan '**' untuk operasi pangkat
    expression = expression.replace(/\^/g, '**');

    // Gantikan simbol 'x' dengan '*' untuk operasi perkalian
    expression = expression.replace(/x/g, '*');

    // Evaluasi ekspresi
    display.value = eval(expression);

    // Simpan hasil dalam memori untuk kemungkinan perhitungan selanjutnya
    memoryValue = display.value;

  } catch (error) {
    display.value = 'Error';  // Jika terjadi kesalahan dalam ekspresi
  }
}
