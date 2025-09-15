function teskariMatn(matn) {
  return matn.split('').reverse().join('');
}
const matn1 = "hello";
alert(
  "1) Teskari matn\n" +
  "Berilgan matn: " + matn1 + "\n" +
  "Natija: " + teskariMatn(matn1)
);

function sozSoni(matn) {
  return matn.trim().split(/\s+/).length;
}
const matn2 = "How are you doing today?";
alert(
  "2) Matnda nechta so'z borligini topish\n" +
  "Berilgan matn: " + matn2 + "\n" +
  "Natija: " + sozSoni(matn2) + " ta"
);

function boshHarfniKatta(matn) {
  return matn
    .split(' ')
    .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1))
    .join(' ');
}
const matn3 = "salom dunyo";
alert(
  "3) Har bir so'zning bosh harfini katta qilish\n" +
  "Berilgan matn: " + matn3 + "\n" +
  "Natija: " + boshHarfniKatta(matn3)
);

function boshJoylarniOchir(matn) {
  return matn.split(' ').join('');
}
const matn4 = "a b c d";
alert(
  "4) Belgilarni o‘chirish\n" +
  "Berilgan matn: " + matn4 + "\n" +
  "Natija: " + boshJoylarniOchir(matn4)
);

function belginiAlmashtir(matn, eski, yangi) {
  return matn.split('').map(ch => ch === eski ? yangi : ch).join('');
}
const matn5 = "Khasan teacher came back";
alert(
  "5) Ikki belgini almashtirish (a → o)\n" +
  "Berilgan matn: " + matn5 + "\n" +
  "Natija: " + belginiAlmashtir(matn5, 'a', 'o')
);

function qismKes(matn, start, end) {
  return matn.slice(start, end);
}
const matn6 = "Khasan teacher came back";
alert(
  "6) Foydalanuvchi bergan matndan 2 ta indeks oralig‘idagi qismini kesib olish\n" +
  "Berilgan matn: " + matn6 + "\n" +
  "Natija: " + qismKes(matn6, 14, 18)
);

function faqatRaqam(matn) {
  return matn.replace(/\D/g, '');
}
const matn7 = "abc123d4";
alert(
  "7) Matndagi raqamlarni ajratish\n" +
  "Berilgan matn: " + matn7 + "\n" +
  "Natija: " + faqatRaqam(matn7)
);

function unliHarflarSoni(matn) {
  const unli = ['a','e','i','o','u','A','E','I','O','U'];
  return matn.split('').filter(harf => unli.includes(harf)).length;
}
const matn8 = "Khasan teacher came back";
alert(
  "8) Matndagi unli harflar soni\n" +
  "Berilgan matn: " + matn8 + "\n" +
  "Natija: " + unliHarflarSoni(matn8)
);

function sozlarniTeskari(matn) {
  return matn.split(' ').reverse().join(' ');
}
const matn9 = "Khasan teacher came back";
alert(
  "9) So'zlarni teskari tartibda chiqarish\n" +
  "Berilgan matn: " + matn9 + "\n" +
  "Natija: " + sozlarniTeskari(matn9)
);
