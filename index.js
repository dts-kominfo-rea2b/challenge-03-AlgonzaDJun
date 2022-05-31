// ! JANGAN DIMOFIDIKASI
const listBelanja = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// membuat fungsi listBelanjaan
let data = [];

const listBelanjaan = (listBelanja) => {
  for (let i = 0; i < listBelanja.length; i++) {
    data.push("- " + listBelanja[i].nama + " x " + listBelanja[i].kuantitas);
  }
  return data;
};

// membuat fungsi totalBelanjaan

let data2 = 0;
const totalBelanjaan = (listBelanja) => {
  for (let i = 0; i < listBelanja.length; i++) {
    data2 += (listBelanja[i].harga * listBelanja[i].kuantitas);
  }
  return data2;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer\n");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(listBelanja)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(listBelanja)
  );
};

main();

module.exports = {
  dataBelanjaan: listBelanja,
  listBelanjaan,
  totalBelanjaan,
};
