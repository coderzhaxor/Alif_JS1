//  if,else,nested if (Aturan Berkendara)
let age = 19;
let hasLicense = true;
if (age >= 18) {
  // Kondisi jika age >= 18
  if (hasLicense === true) {
    // Kondisi jika age >= 18 dan hasLicense === true
    console.log(
      "Surat-surat anda lengkap dan sudah memenuhi persyaratan, selamat melanjutkan perjalanan :)"
    );
  } else {
    // Kondisi jika age >= 18 dan hasLicense === false
    console.log(
      "Anda belum memiliki surat izin mengemudi, motor anda kami sita!"
    );
  }
} else {
  // Kondisi jika age < 18
  console.log(
    "Umur anda belum cukup untuk mengendarai motor, semoga panjang umur"
  );
}

// switch case (Menyatakan jenis kelamin berdasarkan kode)
const jenisKelamin = "L";
switch (jenisKelamin.toUpperCase()) {
  case "P":
    console.log("Perempuan");
    break;
  case "L":
    console.log("Laki-laki");
    break;
  default:
    console.log("Anda bukan golongan kami");
    break;
}

// for statement (Simulasi ketika disuru guru nulis permintaan maaf 100x)
for (let no = 1; no <= 100; no++) {
  console.log(`${no}. Maaf bu saya tidak akan mengulanginya lagi`);
}

// while, do while (mencetak bilangan kuadrat dari 1 hingga 10)
// Tentukan nilai awal
let i = 1;
// Tentukan batas akhir
let n = 10;

do {
  // Lakukan sesuatu
  console.log(`Bilangan kuadrat ke-${i}: ${i * i}`);
  i++;
} while (i <= n);

// function (menghitung rata-rata)
function calculateAverage(...numbers) {
  const sum = numbers.reduce((total, number) => total + number);
  const average = sum / numbers.length;

  return console.log(`Hasil rata-rata : ${average}`);
}

calculateAverage(2, 2, 4, 8);
