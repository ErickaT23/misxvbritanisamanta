// ===================== LOADS.JS =====================
// 1) Lista de invitados
const guests = [
  { id: "1", name: "Grave Lanza", passes: 6 },
  { id: "2", name: "Abuelos Lanza Mejía", passes: 2 },
  { id: "3", name: "Familia Lanza Luna", passes: 5 },
  { id: "4", name: "Papá Wyn", passes: 1 },
  { id: "5", name: "Lucy y Emilio", passes: 2 },
  { id: "6", name: "Ruben Obdulio", passes: 1 },
  { id: "7", name: "Familia Mejía de León", passes: 5 },
  { id: "8", name: "Familia Cordon Mejía", passes: 6 },
  { id: "9", name: "Mamá Sarita", passes: 1 },
  { id: "10", name: "Tía Lilian", passes: 1 },
  { id: "11", name: "Tía Dorita", passes: 1 },
  { id: "12", name: "Tía Mirna", passes: 1 },
  { id: "13", name: "Familia Luna Juarez", passes: 3 },
  { id: "14", name: "Estefany Trinidad", passes: 1 },
  { id: "15", name: "Alexis", passes: 1 },
  { id: "16", name: "Familia Morles Luna", passes: 3 },
  { id: "17", name: "Familia Juarez Caballero", passes: 3 },
  { id: "18", name: "José Cardona", passes: 1 },
  { id: "19", name: "Familia Juarez Alvarado", passes: 2 },
  { id: "20", name: "Familia Juarez Hernández", passes: 3 },
  { id: "21", name: "Familia Juarez Ruiz", passes: 4 },
  { id: "22", name: "Familia Juarez Guzman", passes: 2 },
  { id: "23", name: "Familia Cetino Juarez", passes: 3 },
  { id: "24", name: "Esposos Asencio", passes: 2 },
  { id: "25", name: "Familia Ramos Escobar", passes: 5 },
  { id: "26", name: "Familia Gozalez Estévez", passes: 3 },
  { id: "27", name: "Any Martínez e hijos", passes: 3 },
  { id: "28", name: "César", passes: 1 },
  { id: "29", name: "Alejandro", passes: 1 },
  { id: "30", name: "Familia González Rivera", passes: 5 },
  { id: "31", name: "Rosy Véliz González", passes: 1 },
  { id: "32", name: "Familia Palacios Guzmán", passes: 3 },
  { id: "33", name: "Familia Guzmán Pérez", passes: 4 },
  { id: "34", name: "Las Elegidas", passes: 5 },
  { id: "35", name: "Abuela Aide", passes: 1 },
  { id: "36", name: "Tía Lourdes", passes: 1 },
  { id: "37", name: "Tía Beatriz e hijas", passes: 3 },
  { id: "38", name: "Familia Juarez Alfaro", passes: 2 },
  { id: "39", name: "Estefany Alfaro y Andrés Barrientos", passes: 2 },
  { id: "40", name: "Hermanas Grave Cifuentes", passes: 2 },
  { id: "41", name: "Esposos Solís Moran", passes: 2 },
  { id: "42", name: "Esposos Solís Estupe", passes: 2 },
  { id: "43", name: "Familia Grave Blanco", passes: 4 },
  { id: "44", name: "Familia Grave", passes: 4 },
  { id: "45", name: "Familia Pacach Uggetti", passes: 5 },
  { id: "46", name: "Familia Pacach Noriega", passes: 5 },
  { id: "47", name: "Josué Sian y familia", passes: 3 },
  { id: "48", name: "Noelia Ortíz e hijo", passes: 2 },
  { id: "49", name: "Esposos Colindres Álvarez", passes: 2 },
  { id: "50", name: "Cinthya Leal e hija", passes: 2 },
  { id: "51", name: "Familia Juarez", passes: 3 },
  { id: "52", name: "Esposos Flores Váldes", passes: 2 },
  { id: "53", name: "Familia Gálvez Gozález", passes: 4 },
  { id: "54", name: "Familia Juarez Rosales", passes: 3 },
  { id: "55", name: "Tío Elmer y familia", passes: 4 },
  { id: "56", name: "Herlindo Juarez", passes: 1 },
  { id: "57", name: "Familia González Morán", passes: 3 },
  { id: "58", name: "Denilson Juarez", passes: 1 },
  { id: "59", name: "Darlyn Cuellar y Mario Enríquez", passes: 2 },
  { id: "60", name: "Sindy Cuellar y Mario Enríquez", passes: 1 },
  { id: "61", name: "Esposos Reyes Carrera", passes: 2 },
  { id: "62", name: "Deysi de León Carrera", passes: 1 },
  { id: "63", name: "Familia González Moran", passes: 1 },
  { id: "64", name: "Familia González Azurdia", passes: 3 },
  { id: "65", name: "Elida e hijos", passes: 3 },
  { id: "66", name: "Rosmery e Ingrid", passes: 2 },
  { id: "67", name: "Graciela González y familia", passes: 3 },
  { id: "68", name: "Claudia Lima e hija", passes: 2 },
  { id: "69", name: "Dr. Walter y esposa", passes: 2 },
  { id: "70", name: "Esposo López Moscoso", passes: 2 },
  { id: "71", name: "Adrián Recino y familia", passes: 5 },
  { id: "72", name: "Familia Chávez Alvarizaes", passes: 4 },
  { id: "73", name: "Nerly Matias y Elvis Matias", passes: 2 },
  { id: "74", name: "Mirla Pelaez Samayoa", passes: 1 },
  { id: "75", name: "Iris Girón Hernández", passes: 1 },
  { id: "76", name: "Familia López Chavarría", passes: 4 },
  { id: "77", name: "Norma Leonardo e hijo", passes: 3 },
  { id: "78", name: "Patty Barrientos", passes: 1 },
  { id: "79", name: "Familia Lemus Mejía", passes: 3 },
  { id: "80", name: "Jania Gularte", passes: 1 },
  { id: "81", name: "Seño Amparo e hija", passes: 2 },
  { id: "82", name: "Familia Soriano Beltetón", passes: 5 },
  { id: "83", name: "Claudel Belteton e hijo", passes: 2 },
  { id: "84", name: "Noris San José", passes: 1 },
  { id: "85", name: "Sonia Hernández e hijos", passes: 4 },
  { id: "86", name: "Lili Véliz e hijos", passes: 4 },
  { id: "87", name: "Ana Berta Balarcel e hijos", passes: 3 },
  { id: "88", name: "Paquita San José", passes: 1 },
  { id: "89", name: "Iza", passes: 1 },
  { id: "90", name: "Clemen Balcarcel", passes: 1 },
  { id: "91", name: "Mayra Trinidad", passes: 1 },
  { id: "92", name: "Ronald Soloman y familia", passes: 4 },
  { id: "93", name: "Antonia González y familia", passes: 4 },
  { id: "94", name: "Familia Raymundo Balcarcel", passes: 5 },
  { id: "95", name: "Mirna Balcarcel e hijos", passes: 3 },
  { id: "96", name: "Familia Comparini Lemus", passes: 3 },
  { id: "97", name: "Karla Hernández", passes: 4 },
  { id: "98", name: "Mónica Anti Cortez", passes: 1 },
  { id: "99", name: "Ana Karen Godinez", passes: 1 },
  { id: "100", name: "Melida Cao y familia", passes: 4 },
  { id: "101", name: "Familia Pérez Jerónimo", passes: 5 },
  { id: "102", name: "Odilia Pablo e hijo", passes: 2 },
  { id: "103", name: "Albin Cuellar", passes: 1 },
  { id: "104", name: "Esposos Alvarado Leal", passes: 2 },
  { id: "105", name: "Esposos Alvarado García", passes: 2 },
  { id: "106", name: "Familia Gonzalez Alvarado", passes: 4 },
  { id: "107", name: "Familia Alvarado García", passes: 3 },
  { id: "108", name: "Familia Alvarado Sic", passes: 4 },
  { id: "109", name: "Sergio Juarez y familia", passes: 6 },
  { id: "110", name: "Sergio Fajardo y familia", passes: 3 },
  { id: "111", name: "Cinthya Mancilla", passes: 4 },
  { id: "112", name: "Amy Marroquín y familia", passes: 3 },
  { id: "113", name: "Fabian Samayoa y familia", passes: 4 },
  { id: "114", name: "David Riveiro Loy", passes: 2 },
  { id: "115", name: "José Solís", passes: 2 },
  { id: "116", name: "Luis Artola", passes: 2 },
  { id: "117", name: "Antony Caal", passes: 3 },
  { id: "118", name: "Alejandro Ortíz", passes: 2 },
  { id: "119", name: "Benjami Véliz", passes: 2 },
  { id: "120", name: "Damaris Raymundo", passes: 2 },
  { id: "121", name: "Oscar de la cruz", passes: 2 },
  { id: "122", name: "Sthepany Sandoval", passes: 2 },
  { id: "123", name: "Kamila Laynez", passes: 2 },
  { id: "124", name: "Glendy Gularte", passes: 2 },
  { id: "125", name: "Karla Dubon", passes: 2 },
  { id: "126", name: "Alisson", passes: 2 },
  { id: "127", name: "Evelyn Flores y familia", passes: 3 },
  { id: "128", name: "Dylan", passes: 2 },
  { id: "129", name: "Katerine Flores", passes: 2 },
  { id: "130", name: "Antonia González y familia", passes: 4 },
  { id: "131", name: "Kalyn", passes: 1 },
  { id: "132", name: "Melvin", passes: 1 },
  { id: "133", name: "Cristian", passes: 2 },
  { id: "134", name: "Pedro", passes: 2 },
  { id: "135", name: "Jeniffer", passes: 1 },
  { id: "136", name: "Mitzy", passes: 3 },
  { id: "137", name: "Tatiana", passes: 3 },
  { id: "138", name: "Carmen", passes: 1 },
  { id: "139", name: "David", passes: 2 },
  { id: "140", name: "Celidon", passes: 2 },
  { id: "141", name: "Mía Jimena Martínez Reyes", passes: 1 },
  { id: "142", name: "Servidoras Jesús Mi Salvador", passes: 2 },
  { id: "143", name: "Familia Guzmán Lanza", passes: 4 },
  { id: "144", name: "Familia Escuadrón Grave", passes: 4 },
  { id: "145", name: "Carlos Herrera y Valery Herrera Mendizaba", passes: 2 },
  { id: "146", name: "Familia Batz Pérez", passes: 3},
  {id: "147", name: "Señor Roberto Iboy Monroy y familia", passes: 5},
  { id: "148", name: "Jorge de Leon", passes: 1 },
  { id: "149", name: "Kevin", passes: 2 },
  { id: "150", name: "Aron", passes: 2 },
  { id: "151", name: "Tia Carmela Leal", passes: 1 },
  { id: "152", name: "Rashel Juárez", passes: 1 },
  { id: "153", name: "Daniel Luna", passes: 1 },
  { id: "154", name: "Diego Luna", passes: 1 },
  { id: "155", name: "Cecia", passes: 1 },
  { id: "156", name: "José David", passes: 1 },
  { id: "157", name: "Gladys Morales", passes: 1 },
  { id: "158", name: "Familia", passes: 10 },
  { id: "159", name: "Rubí Barillas", passes: 1 },
  { id: "160", name: "Sofía Reyes", passes: 2 },
  { id: "161", name: "Gabriela Sandoval", passes: 2 },
  { id: "162", name: "Brenda Hernández y familia", passes: 3 },
  { id: "163", name: "Melvin", passes: 1 },
];

// Helper: leer parámetros ?id=1
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");

  // Si no hay id, no marcamos error: solo no hay invitado
  if (!guestId) {
    window.currentGuest = null;
    return;
  }

  const guest = guests.find((g) => String(g.id) === String(guestId));

  if (guest) {
    window.currentGuest = guest;

    // Si tienes estos elementos en alguna parte, los llena (opcional)
    const guestNameEl = document.getElementById("guest-name");
    const passesEl = document.getElementById("passes");

    if (guestNameEl) guestNameEl.textContent = guest.name;
    if (passesEl) {
      const p = Number(guest.passes || 1);
      passesEl.textContent = `${p} ${p === 1 ? "pase" : "pases"}`;
    }
  } else {
    window.currentGuest = null;

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "Invitado no encontrado";
  }
});
