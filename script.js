const STORAGE_KEY = "VMEDITRIX_TN_PHC_V2";
const THEME_STORAGE_KEY = "VMEDITRIX_THEME_PREF";
const USERS_STORAGE_KEY = "VMEDITRIX_USERS_LIST";
const PERSISTENT_USER_KEY = "VMEDITRIX_PERSISTENT_USER"; // Permanent login for primary and secondary users
const ADMIN_SESSION_KEY = "VMEDITRIX_ADMIN_SESSION";     // Temporary session only for admin

// All 38 Tamil Nadu Districts & Representative Health Centres
const TN_DATASET = {
  "COIMBATORE": [
    "Government PHC - Vellalore", "Urban Primary Health Centre - Vellakinar", "Government Urban PHC - Thudiyalur",
    "Primary Health Centre - Dhaliyur", "Primary Health Centre - Perur Road area", "Urban Primary Health Centre - Udayampalayam",
    "Urban Primary Health Centre - Peelamedu", "Urban Primary Health Centre - Sundarapuram", "Primary Health Centre - Idigarai",
    "Government Primary Health Centre - Villankurichi"
  ],
  "MADURAI": [
    "Government Primary Health Centre – Kallendiri", "Primary Health Centre – Othakadai", "Government Primary Health Centre – Rajakoor",
    "Primary Health Centre – Samayanallur", "Primary Health Centre – Kanj arampettai", "Primary Health Centre – Kulamangalam",
    "Primary Health Centre – Koilpapakudi", "Primary Health Centre – Alanganallur", "Government Primary Health Centre – Ayyankottai",
    "Primary Health Centre – Palamedu"
  ],
  "SALEM": [
    "Government Primary Health Centre – Valavanthi", "Primary Health Centre – Nagalur", "Government Primary Health Centre – Karipatti",
    "Primary Health Centre – Masinaickenpatti", "Primary Health Centre – Valaisayur", "Government Primary Health Centre – Achankuttaipatti",
    "Primary Health Centre – Arunuthumalai", "Government Primary Health Centre – Belur", "Primary Health Centre – Valapady",
    "Urban Primary Health Centre – Salem city"
  ],
  "THANJAVUR": [
    "Government Primary Health Centre – Naducauvery", "Primary Health Centre – Thiruvalampozhil", "Government Primary Health Centre – Kabisthalam",
    "Primary Health Centre – Pandaravadai", "Primary Health Centre – Veeramangudi", "Government Primary Health Centre – Patteeswaram",
    "Primary Health Centre – Sundaraperumalkoil", "Government Primary Health Centre – Swamimalai", "Urban Primary Health Centre – Thanjavur city",
    "Government Urban Primary Health Centre – Kumbakonam urban area"
  ],
  "ERODE": [
    "Government Primary Health Centre – Chithode", "Primary Health Centre – Nasiyanur", "Government Primary Health Centre – Thindal",
    "Primary Health Centre – Siruvalur", "Government Primary Health Centre – Kugalur", "Primary Health Centre – Ayalur",
    "Government Primary Health Centre – Ukkaram", "Primary Health Centre – Rajan Nagar", "Urban Primary Health Centre – Erode city",
    "Government Urban Primary Health Centre – Bhavani urban area"
  ],
  "DHARMAPURI": [
    "Government Primary Health Centre – Sitheri", "Primary Health Centre – Bairanatham", "Government Primary Health Centre – B. Mallapuram",
    "Primary Health Centre – Boothanatham", "Government Primary Health Centre – Kadathur", "Primary Health Centre – Morappur",
    "Government Primary Health Centre – Kambainallur", "Primary Health Centre – Chinthalpadi", "Government Primary Health Centre – Ramianahalli",
    "Urban Primary Health Centre – Dharmapuri urban area"
  ],
  "KRISHNAGIRI": [
    "Government Primary Health Centre – Berigai", "Primary Health Centre – Veppanapalli", "Government Primary Health Centre – Nachikuppam",
    "Primary Health Centre – Bargur", "Government Primary Health Centre – Kelamangalam", "Primary Health Centre – Rayakottai",
    "Government Primary Health Centre – Bagalur", "Primary Health Centre – Thalli", "Urban Primary Health Centre – Krishnagiri city",
    "Government Urban Primary Health Centre – Hosur urban area"
  ],
  "KANCHEEPURAM": [
    "Government Primary Health Centre – Walajabad", "Primary Health Centre – Ayyampettai", "Government Primary Health Centre – Parandur",
    "Primary Health Centre – Vallam", "Government Primary Health Centre – Maduramangalam", "Primary Health Centre – Somangalam",
    "Government Urban Primary Health Centre – Kancheepuram", "Urban Primary Health Centre – Kancheepuram city", "Government Urban Primary Health Centre – Kundrathur area",
    "Government Primary Health Centre – Orathy"
  ],
  "RAMANATHAPURAM": [
    "Government Primary Health Centre – Devipattinam", "Primary Health Centre – Chittarkottai", "Government Primary Health Centre – Uchipuli",
    "Primary Health Centre – Mandapam", "Government Primary Health Centre – Pamban", "Primary Health Centre – Thangachimadam",
    "Government Primary Health Centre – Pudumadam", "Primary Health Centre – Thiruppullani", "Urban Primary Health Centre – Ramanathapuram town",
    "Government Urban Primary Health Centre – Rameswaram urban area"
  ],
  "KANNIYAKUMARI": [
    "Government Primary Health Centre – C.R. Puthoor", "Primary Health Centre – Aralvoimozhy", "Government Primary Health Centre – Arumanallur",
    "Primary Health Centre – Thadikarankonam", "Government Primary Health Centre – Thovalai", "Primary Health Centre – Agasteeswaram",
    "Government Primary Health Centre – Azhagappapuram", "Primary Health Centre – Kottaram", "Government Primary Health Centre – Marungoor",
    "Urban Primary Health Centre – Nagercoil urban area"
  ],
  "DINDIGUL": [
    "Government Primary Health Centre – Ammayanaickanur", "Primary Health Centre – Mattaparai", "Government Primary Health Centre – Athoor",
    "Primary Health Centre – Sithayan Kottai", "Government Primary Health Centre – Ayyampalayam", "Primary Health Centre – Chinnalapatty",
    "Government Primary Health Centre – Gujiliamparai", "Primary Health Centre – Viralipatty", "Urban Primary Health Centre – Dindigul city",
    "Government Urban Primary Health Centre – Palani urban area"
  ],
  "NAGAPATTINAM": [
    "Government Primary Health Centre – Thittacheri", "Primary Health Centre – Thirupayathangudi", "Government Primary Health Centre – Thirukkannapuram",
    "Primary Health Centre – Enangudi", "Government Primary Health Centre – Ganapathipuram", "Primary Health Centre – Thirumarugal",
    "Government Primary Health Centre – Kali", "Primary Health Centre – Elanthoppu", "Urban Primary Health Centre – Nagapattinam town",
    "Government Urban Primary Health Centre – Velankanni urban area"
  ],
  "VILLUPURAM": [
    "Government Primary Health Centre – Olakkur", "Primary Health Centre – Avanipur", "Government Primary Health Centre – Saram",
    "Primary Health Centre – Dadhapuram", "Government Primary Health Centre – Anumanthai", "Primary Health Centre – Murukkeri",
    "Government Primary Health Centre – Brammadesam", "Primary Health Centre – Omandur", "Urban Primary Health Centre – Villupuram city",
    "Government Urban Primary Health Centre – Tindivanam urban area"
  ],
  "TIRUVANNAMALAI": [
    "Government Primary Health Centre – Arrattavadi", "Primary Health Centre – Ilangunni", "Government Primary Health Centre – Pudupalayam",
    "Primary Health Centre – Karapattu", "Government Primary Health Centre – Jamnamarathur", "Primary Health Centre – Thatchampadi",
    "Government Primary Health Centre – Chetpet", "Primary Health Centre – Kelur", "Urban Primary Health Centre – Tiruvannamalai town",
    "Government Urban Primary Health Centre – Arani urban area"
  ],
  "PERAMBALUR": [
    "Government Primary Health Centre – Keelapalur", "Primary Health Centre – Kuruvadi", "Government Primary Health Centre – Anukk ur",
    "Primary Health Centre – V. Kalathur", "Government Primary Health Centre – Valikandapuram", "Primary Health Centre – Arumbavoor",
    "Government Primary Health Centre – Pasumbalur", "Primary Health Centre – Poolambadi", "Urban Primary Health Centre – Perambalur town",
    "Government Urban Primary Health Centre – Perambalur urban area"
  ],
  "KARUR": [
    "Government Primary Health Centre – Innungur", "Primary Health Centre – Valayapatti", "Government Primary Health Centre – Ayyar Malai",
    "Primary Health Centre – Nachalur", "Government Primary Health Centre – Thogamalai", "Primary Health Centre – Kavalkaranpatti",
    "Government Primary Health Centre – Panjapatti", "Primary Health Centre – Sengal", "Urban Primary Health Centre – Karur city",
    "Government Urban Primary Health Centre – Kulithalai urban area"
  ],
  "PUDUKKOTTAI": [
    "Government Primary Health Centre – Rangiyam", "Primary Health Centre – Panayapatti", "Government Primary Health Centre – Natchandupatti",
    "Primary Health Centre – Ponnamaravathy", "Government Primary Health Centre – Karaiyur", "Primary Health Centre – Viralimalai",
    "Government Primary Health Centre – Mandaiyur", "Primary Health Centre – Neerpalani", "Urban Primary Health Centre – Pudukkottai town",
    "Government Urban Primary Health Centre – Aranthangi urban area"
  ],
  "TIRUNELVELI": [
    "Government Primary Health Centre – Kallidaikurichy", "Primary Health Centre – Mukkudal", "Government Primary Health Centre – Maruthamputhoor",
    "Primary Health Centre – Moolaikaraipatti", "Government Primary Health Centre – Munainjipatti", "Primary Health Centre – Ittamozhi",
    "Government Primary Health Centre – Singikulam", "Primary Health Centre – Thirukkurungudi", "Urban Primary Health Centre – Tirunelveli city",
    "Government Urban Primary Health Centre – Palayamkottai urban area"
  ],
  "THIRUVARUR": [
    "Government Primary Health Centre – Peralam", "Primary Health Centre – Soraikayur", "Government Primary Health Centre – Thiruvidaicheri",
    "Primary Health Centre – Perumpannaiyur", "Government Primary Health Centre – Kulikkarai", "Primary Health Centre – Athikkadai",
    "Government Primary Health Centre – Alangugi", "Primary Health Centre – Adiyakkamangalam", "Urban Primary Health Centre – Thiruvarur town",
    "Government Urban Primary Health Centre – Mannargudi urban area"
  ],
  "THENI": [
    "Government Primary Health Centre – Veerapandi", "Primary Health Centre – Govindanagaram", "Government Primary Health Centre – Kottur",
    "Primary Health Centre – Devathanapatti", "Government Primary Health Centre – Genguvarpatti", "Primary Health Centre – Vaigai Dam",
    "Government Primary Health Centre – Melmangalam", "Primary Health Centre – Vadapudupatti", "Urban Primary Health Centre – Theni city",
    "Government Urban Primary Health Centre – Bodinayakanur urban area"
  ],
  "CHENNAI": [
    "Government Urban Primary Health Centre – Tondiarpet", "Urban Primary Health Centre – Royapuram", "Government Urban Primary Health Centre – Perambur",
    "Urban Primary Health Centre – Triplicane", "Government Urban Primary Health Centre – Mylapore", "Urban Primary Health Centre – T. Nagar",
    "Government Urban Primary Health Centre – Adyar", "Urban Primary Health Centre – Anna Nagar", "Government Urban Primary Health Centre – Kodambakkam",
    "Urban Primary Health Centre – Thiruvottiyur"
  ],
  "TIRUPPUR": [
    "Government Primary Health Centre – Avinashi", "Primary Health Centre – Palladam", "Government Primary Health Centre – Kangeyam",
    "Primary Health Centre – Dharapuram", "Government Primary Health Centre – Udumalpet", "Primary Health Centre – Madathukulam",
    "Government Primary Health Centre – Mulanur", "Primary Health Centre – Kundadam", "Urban Primary Health Centre – Tiruppur",
    "Government Urban Primary Health Centre – Tiruppur Corporation area"
  ],
  "NILGIRIS": [
    "Government Primary Health Centre – Ketti", "Primary Health Centre – Ithalar", "Government Primary Health Centre – Thuneri",
    "Primary Health Centre – Naduvattam", "Government Primary Health Centre – Masinagudi", "Primary Health Centre – Sholur",
    "Government Primary Health Centre – Pandalur", "Primary Health Centre – Devala", "Government Primary Health Centre – Gudalur",
    "Urban Primary Health Centre – Udhagamandalam"
  ],
  "CUDDALORE": [
    "Government Primary Health Centre – Kurinjipadi", "Primary Health Centre – Bhuvanagiri", "Government Primary Health Centre – Kattumannarkoil",
    "Primary Health Centre – Srimushnam", "Government Primary Health Centre – Panruti", "Primary Health Centre – Neyveli area",
    "Government Primary Health Centre – Parangipettai", "Primary Health Centre – Virudhachalam", "Urban Primary Health Centre – Cuddalore",
    "Government Urban Primary Health Centre – Chidambaram urban area"
  ],
  "ARIYALUR": [
    "Government Primary Health Centre – Andimadam", "Primary Health Centre – Jayankondam", "Government Primary Health Centre – Sendurai",
    "Primary Health Centre – T. Palur", "Government Primary Health Centre – Udayarpalayam", "Primary Health Centre – Thirumanur",
    "Government Primary Health Centre – Venganur", "Primary Health Centre – Kallankurichi", "Urban Primary Health Centre – Ariyalur",
    "Government Primary Health Centre – Gangaikondacholapuram area"
  ],
  "CHENGALPATTU": [
    "Government Primary Health Centre – Thiruporur", "Primary Health Centre – Thirukazhukundram", "Government Primary Health Centre – Madurantakam",
    "Primary Health Centre – Acharapakkam", "Government Primary Health Centre – Cheyyur", "Primary Health Centre – Lathur",
    "Government Primary Health Centre – Tirukalukundram area", "Primary Health Centre – Kattankulathur", "Urban Primary Health Centre – Chengalpattu",
    "Government Urban Primary Health Centre – Tambaram"
  ],
  "KALLAKURICHI": [
    "Government Primary Health Centre – Sankarapuram", "Primary Health Centre – Chinnasalem", "Government Primary Health Centre – Rishivandiyam",
    "Primary Health Centre – Thiyagadurgam", "Government Primary Health Centre – Ulundurpet", "Primary Health Centre – Kalvarayan Hills area",
    "Government Primary Health Centre – Moongilthuraipattu", "Primary Health Centre – Manalurpet", "Urban Primary Health Centre – Kallakurichi",
    "Government Primary Health Centre – Siruvangur area"
  ],
  "MAYILADUTHURAI": [
    "Government Primary Health Centre – Sembanarkoil", "Primary Health Centre – Kuthalam", "Government Primary Health Centre – Manalmedu",
    "Primary Health Centre – Tharangambadi", "Government Primary Health Centre – Kollidam", "Primary Health Centre – Akkur",
    "Government Primary Health Centre – Perambur", "Primary Health Centre – Thiruvengadu", "Urban Primary Health Centre – Mayiladuthurai",
    "Government Primary Health Centre – Vaitheeswarankoil area"
  ],
  "NAMAKKAL": [
    "Government Primary Health Centre – Erumapatti", "Primary Health Centre – Mohanur", "Government Primary Health Centre – Sendamangalam",
    "Primary Health Centre – Rasipuram", "Government Primary Health Centre – Kolli Hills", "Primary Health Centre – Paramathi",
    "Government Primary Health Centre – Velur", "Primary Health Centre – Tiruchengode area", "Urban Primary Health Centre – Namakkal",
    "Government Urban Primary Health Centre – Tiruchengode"
  ],
  "RANIPET": [
    "Government Primary Health Centre – Arcot", "Primary Health Centre – Timiri", "Government Primary Health Centre – Sholinghur",
    "Primary Health Centre – Kalavai", "Government Primary Health Centre – Nemili", "Primary Health Centre – Banavaram",
    "Government Primary Health Centre – Kaveripakkam", "Primary Health Centre – Walajah", "Urban Primary Health Centre – Ranipet",
    "Government Urban Primary Health Centre – Arakkonam"
  ],
  "SIVAGANGAI": [
    "Government Primary Health Centre – Piranmalai", "Primary Health Centre – Mallakottai", "Government Primary Health Centre – M. Soorakudi",
    "Primary Health Centre – Eriyur", "Government Primary Health Centre – V. Pudur", "Primary Health Centre – Puzhuthipatti",
    "Government Primary Health Centre – Nerkuppai", "Primary Health Centre – Keelasevalpatti", "Urban Primary Health Centre – Sivaganga",
    "Government Primary Health Centre – Thiruppuvanam"
  ],
  "TENKASI": [
    "Government Primary Health Centre – Alangulam", "Primary Health Centre – Surandai", "Government Primary Health Centre – Kadayanallur",
    "Primary Health Centre – Shencottai", "Government Primary Health Centre – Puliyangudi", "Primary Health Centre – Vasudevanallur",
    "Government Primary Health Centre – Sankarankovil", "Primary Health Centre – Sivagiri", "Urban Primary Health Centre – Tenkasi",
    "Government Primary Health Centre – Pavoorchatram"
  ],
  "THOOTHUKUDI": [
    "Government Primary Health Centre – Srivaikuntam", "Primary Health Centre – Alwarthirunagari", "Government Primary Health Centre – Sathankulam",
    "Primary Health Centre – Udangudi", "Government Primary Health Centre – Kayathar", "Primary Health Centre – Vilathikulam",
    "Government Primary Health Centre – Ottapidaram", "Primary Health Centre – Pudur", "Urban Primary Health Centre – Thoothukudi",
    "Government Urban Primary Health Centre – Kovilpatti"
  ],
  "TIRUCHIRAPPALLI": [
    "Government Primary Health Centre – Kattuputhur", "Primary Health Centre – Thottiyam", "Government Primary Health Centre – Musiri",
    "Primary Health Centre – Manachanallur", "Government Primary Health Centre – Lalgudi", "Primary Health Centre – Pullambadi",
    "Government Primary Health Centre – Thuraiyur", "Primary Health Centre – Manapparai", "Urban Primary Health Centre – Tiruchirappalli",
    "Government Urban Primary Health Centre – Srirangam"
  ],
  "TIRUPATHUR": [
    "Government Primary Health Centre – Natrampalli", "Primary Health Centre – Jolarpet", "Government Primary Health Centre – Kandili",
    "Primary Health Centre – Vaniyambadi rural area", "Government Primary Health Centre – Alangayam", "Primary Health Centre – Ambalur",
    "Government Primary Health Centre – Madhanur area", "Primary Health Centre – Udayendram area", "Urban Primary Health Centre – Tirupathur",
    "Government Urban Primary Health Centre – Vaniyambadi"
  ],
  "TIRUVALLUR": [
    "Government Primary Health Centre – Poondi", "Primary Health Centre – Kadambathur", "Government Primary Health Centre – Tiruttani",
    "Primary Health Centre – Pallipattu", "Government Primary Health Centre – Gummidipoondi", "Primary Health Centre – Minjur",
    "Government Primary Health Centre – Sholavaram", "Primary Health Centre – Thiruvallur rural area", "Urban Primary Health Centre – Tiruvallur",
    "Government Urban Primary Health Centre – Avadi"
  ],
  "VELLORE": [
    "Government Primary Health Centre – Anaicut", "Primary Health Centre – Kaniyambadi", "Government Primary Health Centre – Odugathur",
    "Primary Health Centre – Pennathur", "Government Primary Health Centre – Bagayam rural area", "Primary Health Centre – K.V. Kuppam",
    "Government Primary Health Centre – Gudiyatham rural area", "Primary Health Centre – Katpadi rural area", "Urban Primary Health Centre – Vellore",
    "Government Urban Primary Health Centre – Gudiyatham"
  ],
  "VIRUDHUNAGAR": [
    "Primary Health Centre - Malaipatti", "Primary Health Centre - Uppathur", "Primary Health Centre - Sempatti",
    "Primary Health Centre - Iluppaiyur", "Primary Health Centre - Krishnaperi", "Urban Primary Health Centre - Sattur",
    "Urban Primary Health Centre - Sivakasi", "Urban Primary Health Centre - Srivilliputhur", "Urban Primary Health Centre - Rajapalayam (T.P. Mills Road)",
    "Urban Primary Health Centre Aruppukottai"
  ]
};

function buildCentresList() {
  const list = [];
  let index = 1;
  for (const [dist, centres] of Object.entries(TN_DATASET)) {
    centres.forEach((name, cIdx) => {
      list.push({
        id: `TN-${dist.substring(0,3)}-${String(cIdx + 1).padStart(2, '0')}`,
        name: name,
        district: dist,
        beds: 15 + ((index * 7) % 25)
      });
      index++;
    });
  }
  return list;
}

const PHC_CENTRES = buildCentresList();

const ESSENTIAL_MEDICINES = [
  { id: "MED-001", generic: "Paracetamol", brand: "Calpol", cat: "Analgesics", form: "Tab 500mg", storage: "Ambient", baseADC: 110 },
  { id: "MED-002", generic: "Amoxicillin", brand: "Novamox", cat: "Antibiotics", form: "Cap 500mg", storage: "Ambient", baseADC: 75 },
  { id: "MED-003", generic: "Oral Rehydration Salts (ORS)", brand: "WHO ORS", cat: "Gastrointestinal", form: "Sachet 21.8g", storage: "Ambient", baseADC: 130 },
  { id: "MED-004", generic: "Cetirizine", brand: "Cetzine", cat: "Antihistamines", form: "Tab 10mg", storage: "Ambient", baseADC: 80 },
  { id: "MED-005", generic: "Amlodipine", brand: "Amlong 5", cat: "Cardiovascular", form: "Tab 5mg", storage: "Ambient", baseADC: 85 },
  { id: "MED-006", generic: "Metformin", brand: "Glyciphage 500", cat: "Diabetes", form: "Tab 500mg", storage: "Ambient", baseADC: 95 },
  { id: "MED-007", generic: "Iron & Folic Acid", brand: "IFA Tablets", cat: "Maternal Health", form: "Tab 100mg", storage: "Ambient", baseADC: 120 },
  { id: "MED-008", generic: "Salbutamol Inhaler", brand: "Asthalin", cat: "Respiratory", form: "Inhaler 100mcg", storage: "Ambient", baseADC: 18 },
  { id: "MED-009", generic: "Human Insulin 30/70", brand: "Mixtard", cat: "Cold Chain", form: "Vial 40IU/ml", storage: "Cold Chain", baseADC: 16 },
  { id: "MED-010", generic: "Polyvalent Anti-Snake Venom", brand: "ASV Lyophilized", cat: "Emergency", form: "Vial 10ml", storage: "Cold Chain", baseADC: 5 },
  { id: "MED-011", generic: "Ciprofloxacin", brand: "Cifran", cat: "Antibiotics", form: "Tab 500mg", storage: "Ambient", baseADC: 55 },
  { id: "MED-012", generic: "Pantoprazole", brand: "Pan 40", cat: "Gastrointestinal", form: "Tab 40mg", storage: "Ambient", baseADC: 70 },
  { id: "MED-013", generic: "Diclofenac Injection", brand: "Voveran", cat: "Analgesics", form: "Ampoule 75mg", storage: "Ambient", baseADC: 22 },
  { id: "MED-014", generic: "Normal Saline 0.9% IV", brand: "NS 500ml", cat: "Consumables", form: "Bottle 500ml", storage: "Ambient", baseADC: 40 },
  { id: "MED-015", generic: "Tetanus Toxoid Vaccine", brand: "TT Vaccine", cat: "Cold Chain", form: "Ampoule 0.5ml", storage: "Cold Chain", baseADC: 20 }
];

// ========================================================
// AUTH CONTROLLER (ONE-TIME PERSISTENCE LOGIC ENFORCED)
// ========================================================
class AuthController {
  constructor() {
    this.currentUser = null;
    this.initUsers();
  }

  initUsers() {
    if (!localStorage.getItem(USERS_STORAGE_KEY)) {
      const defaultUsers = [
        {
          username: "admin.cbe",
          password: "admin123",
          name: "District Medical Officer (Coimbatore)",
          role: "admin",
          district: "COIMBATORE",
          centreId: null
        },
        {
          username: "phc.vellalore",
          password: "phc123",
          name: "Chief Pharmacist (Vellalore PHC)",
          role: "primary",
          district: "COIMBATORE",
          centreId: "TN-COI-01"
        },
        {
          username: "citizen",
          password: "citizen123",
          name: "Citizen / Public User",
          role: "secondary",
          district: "ALL",
          centreId: null
        }
      ];
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(defaultUsers));
    }

    // 1. Check permanent storage for primary and secondary users (next login not required)
    const persistentUser = localStorage.getItem(PERSISTENT_USER_KEY);
    if (persistentUser) {
      try {
        const parsed = JSON.parse(persistentUser);
        if (parsed && (parsed.role === "primary" || parsed.role === "secondary")) {
          this.currentUser = parsed;
          return;
        }
      } catch(e) {
        localStorage.removeItem(PERSISTENT_USER_KEY);
      }
    }

    // 2. Admin NEVER persists permanently in localStorage (always required on next tab/session)
    const adminSession = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (adminSession) {
      try {
        const parsedAdmin = JSON.parse(adminSession);
        if (parsedAdmin && parsedAdmin.role === "admin") {
          this.currentUser = parsedAdmin;
          return;
        }
      } catch(e) {
        sessionStorage.removeItem(ADMIN_SESSION_KEY);
      }
    }

    this.currentUser = null;
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]");
  }

  switchTab(tab) {
    document.getElementById("tab-btn-login").classList.toggle("active", tab === 'login');
    document.getElementById("tab-btn-signup").classList.toggle("active", tab === 'signup');
    document.getElementById("form-login").style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById("form-signup").style.display = tab === 'signup' ? 'block' : 'none';
    document.getElementById("login-error-msg").style.display = "none";
    if (tab === 'signup') this.populateSignupDistricts();
  }

  quickFill(u, p) {
    this.switchTab('login');
    document.getElementById("auth-login-user").value = u;
    document.getElementById("auth-login-pass").value = p;
    document.getElementById("login-error-msg").style.display = "none";
  }

  populateSignupDistricts() {
    const dSelect = document.getElementById("auth-reg-district");
    const districts = Object.keys(TN_DATASET).sort();
    dSelect.innerHTML = districts.map(d => `<option value="${d}">${d}</option>`).join("");
    this.onDistrictChange(dSelect.value);
  }

  onRoleSelectChange(role) {
    const cGroup = document.getElementById("reg-group-centre");
    cGroup.style.display = role === "primary" ? "block" : "none";
  }

  onDistrictChange(dist) {
    const cSelect = document.getElementById("auth-reg-centre");
    const available = PHC_CENTRES.filter(c => c.district === dist);
    cSelect.innerHTML = available.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  }

  handleLogin() {
    const u = document.getElementById("auth-login-user").value.trim().toLowerCase();
    const p = document.getElementById("auth-login-pass").value;
    const errBox = document.getElementById("login-error-msg");
    const users = this.getUsers();

    const match = users.find(x => x.username.toLowerCase() === u && x.password === p);
    if (!match) {
      errBox.style.display = "block";
      errBox.textContent = "Incorrect username or password. Please try again.";
      return;
    }

    errBox.style.display = "none";
    this.currentUser = match;

    if (match.role === "admin") {
      // Admin is saved strictly to temporary session, requiring login on future visits
      sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(match));
      localStorage.removeItem(PERSISTENT_USER_KEY);
    } else {
      // Primary and secondary users are permanently remembered after the first login
      localStorage.setItem(PERSISTENT_USER_KEY, JSON.stringify(match));
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    }

    this.dismissAuthGateway();
  }

  handleSignup() {
    const name = document.getElementById("auth-reg-name").value.trim();
    const u = document.getElementById("auth-reg-user").value.trim().toLowerCase();
    const p = document.getElementById("auth-reg-pass").value;
    const role = document.getElementById("auth-reg-role").value;
    const dist = document.getElementById("auth-reg-district").value;
    const centreId = role === "primary" ? document.getElementById("auth-reg-centre").value : null;

    const users = this.getUsers();
    if (users.some(x => x.username.toLowerCase() === u)) {
      alert("Username already exists. Please choose another username.");
      return;
    }

    const newUser = { username: u, password: p, name, role, district: dist, centreId };
    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    this.currentUser = newUser;

    if (role === "admin") {
      sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(newUser));
      localStorage.removeItem(PERSISTENT_USER_KEY);
    } else {
      localStorage.setItem(PERSISTENT_USER_KEY, JSON.stringify(newUser));
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    }

    this.dismissAuthGateway();
  }

  dismissAuthGateway() {
    document.getElementById("auth-screen").style.display = "none";
    this.applyRoleRestrictions();
    MediApp.onAuthChanged();
  }

  logout() {
    // Complete logout clears both persistent and temporary sessions
    localStorage.removeItem(PERSISTENT_USER_KEY);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    this.currentUser = null;
    document.getElementById("auth-screen").style.display = "flex";
    this.switchTab('login');
  }

  applyRoleRestrictions() {
    const u = this.currentUser;
    if (!u) return;

    document.getElementById("sidebar-user-name").textContent = u.name;
    const badge = document.getElementById("sidebar-user-role");
    badge.textContent = u.role.toUpperCase();

    document.querySelectorAll(".nav-role-admin").forEach(el => el.style.display = u.role === "admin" ? "block" : "none");
    document.querySelectorAll(".nav-role-primary").forEach(el => {
      if (u.role === "primary") el.style.display = "block";
    });
    document.querySelectorAll(".nav-role-secondary").forEach(el => el.style.display = u.role === "secondary" ? "block" : "none");

    const distWrapper = document.getElementById("header-district-wrapper");
    const centreWrapper = document.getElementById("header-centre-wrapper");
    const priBadge = document.getElementById("header-primary-assigned-badge");
    const quickRecordBtn = document.getElementById("btn-quick-record");

    if (u.role === "admin") {
      distWrapper.style.display = "flex";
      centreWrapper.style.display = "flex";
      priBadge.style.display = "none";
      quickRecordBtn.style.display = "inline-flex";
    } else if (u.role === "primary") {
      distWrapper.style.display = "flex";
      centreWrapper.style.display = "none";
      priBadge.style.display = "inline-flex";
      const myCentre = PHC_CENTRES.find(c => c.id === u.centreId);
      document.getElementById("primary-assigned-name").textContent = myCentre ? myCentre.name : u.centreId;
      quickRecordBtn.style.display = "inline-flex";
    } else {
      distWrapper.style.display = "flex";
      centreWrapper.style.display = "flex";
      priBadge.style.display = "none";
      quickRecordBtn.style.display = "none";
    }
  }
}

// ========================================================
// CITIZEN SEARCH CONTROLLER WITH GOOGLE MAPS NAVIGATION
// ========================================================
class CitizenPortal {
  constructor() {
    this.init();
  }

  init() {
    const distSelect = document.getElementById("citizen-district-select");
    const districts = Object.keys(TN_DATASET).sort();
    distSelect.innerHTML = `<option value="ALL">All 38 Districts</option>` + districts.map(d => `<option value="${d}">${d}</option>`).join("");
  }

  filterStock() {
    const dist = document.getElementById("citizen-district-select").value;
    const search = (document.getElementById("citizen-med-search").value || "").toLowerCase().trim();
    const availOnly = document.getElementById("citizen-avail-filter").value === "AVAILABLE";

    const items = MediApp.getEnrichedInventory(dist, "ALL").filter(i => {
      const matchMed = i.med.generic.toLowerCase().includes(search) || i.med.brand.toLowerCase().includes(search);
      const hasStock = availOnly ? i.totalStock > 0 : true;
      return matchMed && hasStock;
    });

    const container = document.getElementById("citizen-results-container");
    if (items.length === 0) {
      container.innerHTML = `
        <div class="card" style="grid-column: 1/-1; text-align:center; padding: 36px;">
          <i class="fa-solid fa-box-open" style="font-size: 2rem; color: var(--text-dim); margin-bottom: 12px;"></i>
          <h4 style="font-weight:700;">No matching medicines currently in stock</h4>
          <p style="font-size:0.8rem; color:var(--text-muted);">Try modifying search keywords or switching district</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.slice(0, 40).map(item => {
      const gmapQuery = encodeURIComponent(`${item.centre.name}, ${item.centre.district}, Tamil Nadu`);
      const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${gmapQuery}`;

      return `
        <div class="card">
          <div class="flex-between" style="margin-bottom: 8px;">
            <span class="badge ${item.totalStock > 0 ? 'badge-healthy' : 'badge-critical'}">
              ${item.totalStock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
            <span class="mono" style="font-size:0.75rem; color:var(--text-dim);">${item.med.storage}</span>
          </div>
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-white); margin-bottom: 2px;">
            ${item.med.generic}
          </h4>
          <div style="font-size: 0.78rem; color: var(--accent-primary); margin-bottom: 12px;">
            Brand: ${item.med.brand} &bull; ${item.med.form}
          </div>
          <div style="background: rgba(0,0,0,0.06); padding: 12px; border-radius: 10px; margin-bottom: 12px;">
            <div style="font-size: 0.72rem; color: var(--text-dim);">AVAILABLE AT:</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-white);">${item.centre.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
              <i class="fa-solid fa-map-pin"></i> ${item.centre.district} District
            </div>
          </div>
          <div class="flex-between">
            <div>
              <span style="font-size: 0.7rem; color: var(--text-dim);">Available Units:</span>
              <div class="mono" style="font-size: 1.1rem; font-weight: 800; color: var(--status-healthy);">${item.totalStock} units</div>
            </div>
            <a href="${gmapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="text-decoration:none;">
              <i class="fa-solid fa-diamond-turn-right"></i> Route on Google Maps
            </a>
          </div>
        </div>
      `;
    }).join("");
  }

  renderDirectory() {
    const dist = document.getElementById("citizen-district-select").value;
    let centres = PHC_CENTRES;
    if (dist !== "ALL") centres = PHC_CENTRES.filter(c => c.district === dist);
    const container = document.getElementById("citizen-centres-container");

    container.innerHTML = centres.map(c => {
      const gmapQuery = encodeURIComponent(`${c.name}, ${c.district}, Tamil Nadu`);
      const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${gmapQuery}`;

      return `
        <div class="card">
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">${c.name}</h4>
          <div style="font-size: 0.78rem; color: var(--accent-primary); margin-bottom: 12px;">
            <i class="fa-solid fa-hospital"></i> Bed Capacity: ${c.beds} &bull; ${c.district}
          </div>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 16px;">
            Government Primary Healthcare Facility providing free OPD services and formulary drug dispensing.
          </p>
          <div class="flex-between">
            <span class="badge badge-info"><i class="fa-solid fa-clock"></i> 24x7 Emergency</span>
            <a href="${gmapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="text-decoration:none;">
              <i class="fa-solid fa-location-dot" style="color:var(--accent-primary);"></i> Open in GMaps
            </a>
          </div>
        </div>
      `;
    }).join("");
  }
}

// ========================================================
// MAIN APP CORE ENGINE
// ========================================================
class MediWatchEngine {
  constructor() {
    this.selectedDistrict = "COIMBATORE";
    this.selectedCentre = "ALL";
    this.activeSection = "section-dashboard";
    this.inventoryPage = 1;
    this.inventoryPageSize = 15;
    this.charts = {};
    this.data = null;
    this.theme = localStorage.getItem(THEME_STORAGE_KEY) || "dark";

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.loadState();
    this.populateHeaderDropdowns();
    this.bindEvents();
    this.renderAll();
    this.initCharts();
  }

  onAuthChanged() {
    const u = MediAuth.currentUser;
    if (!u) return;

    if (u.role === "admin") {
      this.selectedDistrict = u.district || "COIMBATORE";
      this.selectedCentre = "ALL";
      document.getElementById("top-district-select").value = this.selectedDistrict;
      this.updateCentreDropdown();
      this.navigate("section-dashboard");
    } else if (u.role === "primary") {
      this.selectedDistrict = u.district;
      this.selectedCentre = u.centreId;
      document.getElementById("top-district-select").value = this.selectedDistrict;
      this.navigate("section-dashboard");
    } else {
      this.navigate("section-citizen-portal");
      MediCitizen.filterStock();
      MediCitizen.renderDirectory();
    }
    this.renderAll();
    this.updateCharts();
  }

  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    const icon = document.getElementById("theme-icon");
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (this.charts && Object.keys(this.charts).length > 0) {
      Chart.defaults.color = theme === "dark" ? '#94c3d8' : '#3a6278';
      this.updateCharts();
    }
  }

  toggleTheme() {
    const next = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(next);
    this.showToast(`Switched to ${next.toUpperCase()} liquid glass theme`, "info");
  }

  loadState() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        this.data = JSON.parse(stored);
        const hasVirudhunagar = this.data.inventory.some(i => i.centreId.includes("VIR"));
        if (!hasVirudhunagar) this.seedDataset();
      } catch(e) {
        this.seedDataset();
      }
    } else {
      this.seedDataset();
    }
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  seedDataset() {
    const inventory = [];
    PHC_CENTRES.forEach((centre, cIdx) => {
      ESSENTIAL_MEDICINES.forEach((med, mIdx) => {
        const seedKey = (cIdx * 13 + mIdx * 7) % 100;
        let daysStock;
        if (seedKey < 18) daysStock = (Math.random() * 2 + 1);
        else if (seedKey > 75) daysStock = Math.floor(Math.random() * 22) + 26;
        else daysStock = Math.floor(Math.random() * 12) + 12;

        const adc = Math.max(2, Math.round(med.baseADC * (0.8 + ((cIdx % 5) * 0.1))));
        const usable = Math.round(adc * daysStock);

        inventory.push({
          centreId: centre.id,
          medicineId: med.id,
          totalStock: usable,
          dailyConsumption: adc,
          reorderThreshold: Math.round(adc * 7)
        });
      });
    });

    this.data = {
      catalogue: ESSENTIAL_MEDICINES,
      inventory: inventory,
      restocks: [],
      history: [],
      settings: { critDays: 2, transferTriggerDays: 7 },
      readAlerts: []
    };
    this.saveState();
  }

  populateHeaderDropdowns() {
    const distSelect = document.getElementById("top-district-select");
    const districts = Object.keys(TN_DATASET).sort();
    distSelect.innerHTML = `<option value="ALL">All 38 Districts</option>` + 
      districts.map(d => `<option value="${d}" ${d === this.selectedDistrict ? 'selected' : ''}>${d}</option>`).join("");

    this.updateCentreDropdown();
  }

  updateCentreDropdown() {
    const phcSelect = document.getElementById("top-phc-select");
    let available = PHC_CENTRES;
    if (this.selectedDistrict !== "ALL") {
      available = PHC_CENTRES.filter(c => c.district === this.selectedDistrict);
    }
    phcSelect.innerHTML = `<option value="ALL">All Centres (${available.length})</option>` +
      available.map(c => `<option value="${c.id}" ${c.id === this.selectedCentre ? 'selected' : ''}>${c.name}</option>`).join("");
  }

  bindEvents() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        const sec = link.getAttribute("data-section");
        if (sec) this.navigate(sec);
      });
    });

    document.getElementById("btn-mobile-sidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("open");
    });

    document.getElementById("theme-toggle").addEventListener("click", () => this.toggleTheme());

    document.getElementById("top-district-select").addEventListener("change", (e) => {
      this.selectedDistrict = e.target.value;
      this.selectedCentre = "ALL";
      this.updateCentreDropdown();
      this.renderAll();
      this.updateCharts();
      this.showToast(`Switched view to District: ${this.selectedDistrict}`, "info");
    });

    document.getElementById("top-phc-select").addEventListener("change", (e) => {
      this.selectedCentre = e.target.value;
      this.renderAll();
      this.updateCharts();
    });

    document.getElementById("global-search").addEventListener("input", () => {
      if (this.activeSection !== "section-inventory") this.navigate("section-inventory");
      this.inventoryPage = 1;
      this.renderInventoryTable();
    });

    document.getElementById("btn-quick-record").addEventListener("click", () => this.openQuickRecordModal());
    document.getElementById("btn-open-add-med-modal").addEventListener("click", () => this.openQuickRecordModal());
    document.getElementById("btn-open-create-restock").addEventListener("click", () => this.openModal("modal-create-restock"));

    document.getElementById("btn-submit-stock-tx").addEventListener("click", () => this.handleStockTransaction());
    document.getElementById("btn-submit-restock-request").addEventListener("click", () => this.handleCreateRestock());

    document.getElementById("btn-notifications").addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = document.getElementById("notif-dropdown");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#notif-wrapper")) {
        document.getElementById("notif-dropdown").style.display = "none";
      }
    });

    document.getElementById("btn-clear-notifs").addEventListener("click", () => {
      const allItems = this.getEnrichedInventory("ALL", "ALL");
      this.data.readAlerts = allItems.map(i => `${i.centreId}-${i.medicineId}`);
      this.saveState();
      document.getElementById("notif-bell-badge").textContent = "0";
      document.getElementById("notif-bell-badge").style.display = "none";
      document.getElementById("notif-dropdown-list").innerHTML = `<div style="text-align:center; padding:18px; color:var(--text-dim); font-size:0.8rem;">No active unread warnings.</div>`;
      document.getElementById("notif-dropdown").style.display = "none";
      this.showToast("All notification highlights cleared", "info");
    });

    document.getElementById("btn-save-settings").addEventListener("click", () => {
      this.data.settings.critDays = parseInt(document.getElementById("setting-crit-days").value) || 2;
      this.data.settings.transferTriggerDays = parseInt(document.getElementById("setting-transfer-trigger").value) || 7;
      this.saveState();
      this.renderAll();
      this.showToast("Settings preserved and model re-calibrated", "success");
    });

    document.getElementById("btn-reset-demo-data").addEventListener("click", () => {
      if (confirm("Reset and re-seed all simulated inventory for all 38 Tamil Nadu districts?")) {
        this.seedDataset();
        this.renderAll();
        this.updateCharts();
        this.showToast("Inventory re-initialized across 38 districts", "success");
      }
    });

    ["inv-filter-category", "inv-filter-status", "inv-filter-storage", "inv-sort-by"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("change", () => {
        this.inventoryPage = 1;
        this.renderInventoryTable();
      });
    });
  }

  navigate(sectionId) {
    document.querySelectorAll(".spa-section").forEach(s => s.style.display = "none");
    const sec = document.getElementById(sectionId);
    if (sec) sec.style.display = "block";
    this.activeSection = sectionId;

    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("data-section") === sectionId);
    });

    document.getElementById("sidebar").classList.remove("open");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (["section-dashboard", "section-forecast"].includes(sectionId)) {
      setTimeout(() => this.updateCharts(), 50);
    }
  }

  getEffectiveScope() {
    const u = MediAuth ? MediAuth.currentUser : null;
    if (!u) return { district: this.selectedDistrict, centre: this.selectedCentre };
    if (u.role === "primary") return { district: u.district, centre: u.centreId };
    return { district: this.selectedDistrict, centre: this.selectedCentre };
  }

  getEnrichedInventory(scopeDistrict = null, scopeCentre = null) {
    const scope = this.getEffectiveScope();
    const dist = scopeDistrict || scope.district;
    const ctr = scopeCentre || scope.centre;

    const results = [];
    this.data.inventory.forEach(inv => {
      const centre = PHC_CENTRES.find(c => c.id === inv.centreId);
      if (!centre) return;
      if (dist !== "ALL" && centre.district !== dist) return;
      if (ctr !== "ALL" && inv.centreId !== ctr) return;

      const med = this.data.catalogue.find(m => m.id === inv.medicineId);
      if (!med) return;

      const usable = inv.totalStock;
      const adc = inv.dailyConsumption;
      const days = adc > 0 ? parseFloat((usable / adc).toFixed(1)) : 999;
      
      let status = "Healthy";
      if (days <= 2) status = "Critical";
      else if (days <= 5) status = "High Risk";
      else if (days <= 7) status = "Warning";
      else if (usable <= inv.reorderThreshold) status = "Low Stock";

      results.push({
        ...inv,
        centre,
        med,
        daysRemaining: days,
        status,
        runOutDate: days <= 60 ? new Date(Date.now() + days * 86400000).toISOString().split("T")[0] : "Stable"
      });
    });
    return results;
  }

  computeTransferRecommendations() {
    const triggerDays = this.data.settings.transferTriggerDays || 7;
    const allItems = this.getEnrichedInventory("ALL", "ALL");
    const recommendations = [];
    const u = MediAuth ? MediAuth.currentUser : null;

    const deficits = allItems.filter(i => {
      if (u && u.role === "primary") {
        return i.centreId === u.centreId && i.daysRemaining <= triggerDays;
      }
      if (this.selectedDistrict !== "ALL" && i.centre.district !== this.selectedDistrict) return false;
      return i.daysRemaining <= triggerDays;
    });

    deficits.forEach(def => {
      const potentialDonors = allItems.filter(donor => 
        donor.medicineId === def.medicineId &&
        donor.centreId !== def.centreId &&
        donor.centre.district === def.centre.district &&
        donor.daysRemaining >= 18
      );

      if (potentialDonors.length > 0) {
        potentialDonors.sort((a,b) => b.daysRemaining - a.daysRemaining);
        const donor = potentialDonors[0];

        const neededQty = Math.round(def.dailyConsumption * 7);
        const donorMaxTransfer = Math.max(0, donor.totalStock - (donor.dailyConsumption * 14));
        const transferQty = Math.min(neededQty, donorMaxTransfer);

        if (transferQty >= (def.dailyConsumption * 2)) {
          recommendations.push({
            medicine: def.med,
            district: def.centre.district,
            transferQty,
            recipient: {
              centre: def.centre,
              oldStock: def.totalStock,
              newStock: def.totalStock + transferQty,
              oldDays: def.daysRemaining,
              newDays: parseFloat(((def.totalStock + transferQty) / def.dailyConsumption).toFixed(1))
            },
            donor: {
              centre: donor.centre,
              oldStock: donor.totalStock,
              newStock: donor.totalStock - transferQty,
              oldDays: donor.daysRemaining,
              newDays: parseFloat(((donor.totalStock - transferQty) / donor.dailyConsumption).toFixed(1))
            }
          });
        }
      }
    });

    return recommendations;
  }

  renderTransfers() {
    const container = document.getElementById("transfers-container");
    const recs = this.computeTransferRecommendations();
    document.getElementById("kpi-transfer-recs").textContent = recs.length;
    document.getElementById("btn-transfers-count").textContent = recs.length;
    document.getElementById("sidebar-transfer-badge").textContent = recs.length;

    if (recs.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align:center; padding: 48px;">
          <i class="fa-solid fa-check-double" style="font-size: 2.5rem; color: var(--status-healthy); margin-bottom: 12px;"></i>
          <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px;">Zero Urgent Peer Transfers Required</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            All monitored primary health facilities are within normal reserve bounds or no donor centres have surplus.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = recs.map((t) => `
      <div class="transfer-card">
        <div class="flex-between" style="flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
          <div>
            <span class="badge badge-info" style="margin-right: 8px;">PROPOSED TRANSFER</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-solid fa-map-pin"></i> ${t.district} DISTRICT</span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-white); margin-top: 4px;">
              ${t.medicine.generic} <span style="font-size: 0.85rem; color: var(--text-dim);">(${t.medicine.form})</span>
            </h3>
          </div>
          <div class="transfer-flow-badge">
            <i class="fa-solid fa-truck" style="color:var(--accent-primary);"></i>
            <span>Transfer Volume: <strong class="mono" style="color:var(--accent-primary);">${t.transferQty.toLocaleString()} units</strong></span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 16px;">
          <div style="background: rgba(0, 0, 0, 0.08); border: 1px solid rgba(244, 63, 94, 0.35); border-radius: 12px; padding: 14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <span style="font-size: 0.75rem; font-weight:700; color: var(--status-critical);"><i class="fa-solid fa-arrow-down"></i> RECEIVING FACILITY (DEFICIT)</span>
              <span class="badge badge-critical">Runs Out: ${t.recipient.oldDays}d</span>
            </div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-white);">${t.recipient.centre.name}</div>
            <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div>Stock: <strong class="mono" style="color:var(--status-critical);">${t.recipient.oldStock}</strong> &rarr; <strong class="mono" style="color:var(--status-healthy);">${t.recipient.newStock} units</strong></div>
              <div>Runway: <strong class="mono" style="color:var(--status-critical);">${t.recipient.oldDays}d</strong> &rarr; <strong class="mono" style="color:var(--status-healthy);">${t.recipient.newDays} days</strong></div>
            </div>
          </div>

          <div style="background: rgba(0, 0, 0, 0.08); border: 1px solid rgba(45, 212, 191, 0.35); border-radius: 12px; padding: 14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <span style="font-size: 0.75rem; font-weight:700; color: var(--status-healthy);"><i class="fa-solid fa-arrow-up"></i> DONOR FACILITY (SURPLUS)</span>
              <span class="badge badge-healthy">Healthy Buffer</span>
            </div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-white);">${t.donor.centre.name}</div>
            <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted); display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div>Stock: <strong class="mono">${t.donor.oldStock}</strong> &rarr; <strong class="mono" style="color:var(--accent-primary);">${t.donor.newStock} units</strong></div>
              <div>Runway: <strong class="mono">${t.donor.oldDays}d</strong> &rarr; <strong class="mono" style="color:var(--accent-primary);">${t.donor.newDays} days</strong></div>
            </div>
          </div>
        </div>

        <div class="flex-between">
          <span style="font-size: 0.75rem; color: var(--text-dim);">
            <i class="fa-solid fa-circle-check" style="color:var(--status-healthy);"></i> Safe reallocation: Donor preserves sufficient 14+ day buffer.
          </span>
          <button class="btn btn-primary btn-sm" onclick="MediApp.executeTransfer('${t.donor.centre.id}', '${t.recipient.centre.id}', '${t.medicine.id}', ${t.transferQty})">
            <i class="fa-solid fa-check"></i> Authorize & Execute Transfer
          </button>
        </div>
      </div>
    `).join("");
  }

  executeTransfer(donorCentreId, recipCentreId, medId, qty) {
    const donor = this.data.inventory.find(i => i.centreId === donorCentreId && i.medicineId === medId);
    const recip = this.data.inventory.find(i => i.centreId === recipCentreId && i.medicineId === medId);

    if (!donor || !recip || donor.totalStock < qty) {
      this.showToast("Cannot process transfer: Donor stock insufficient.", "error");
      return;
    }

    donor.totalStock -= qty;
    recip.totalStock += qty;

    const donorCentre = PHC_CENTRES.find(c => c.id === donorCentreId);
    const recipCentre = PHC_CENTRES.find(c => c.id === recipCentreId);
    const med = this.data.catalogue.find(m => m.id === medId);

    this.data.history.unshift({
      timestamp: new Date().toISOString(),
      centreId: recipCentreId,
      medicineId: medId,
      type: "INTER_CENTRE_TRANSFER",
      quantity: qty,
      reason: `Transfer received from ${donorCentre.name}`
    });

    this.data.history.unshift({
      timestamp: new Date().toISOString(),
      centreId: donorCentreId,
      medicineId: medId,
      type: "INTER_CENTRE_TRANSFER_OUT",
      quantity: -qty,
      reason: `Surplus dispatched to ${recipCentre.name}`
    });

    this.saveState();
    this.renderAll();
    this.updateCharts();
    this.showToast(`Transfer complete: ${qty} units of ${med.generic} transferred!`, "success");
  }

  recalculateTransfers() {
    this.renderTransfers();
    this.showToast("Inter-centre peer transfer calculations refreshed.", "info");
  }

  renderKPIs() {
    const list = this.getEnrichedInventory();
    const scope = this.getEffectiveScope();
    let centresCount = PHC_CENTRES.length;
    if (scope.centre !== "ALL") centresCount = 1;
    else if (scope.district !== "ALL") centresCount = PHC_CENTRES.filter(c => c.district === scope.district).length;

    const totalStock = list.reduce((a, b) => a + b.totalStock, 0);
    const critCount = list.filter(i => i.daysRemaining <= 2).length;
    const sevenDays = list.filter(i => i.daysRemaining <= 7).length;

    // Unread alerts logic for bell badge accurately synced with read alerts
    const unreadAlerts = list.filter(i => 
      i.daysRemaining <= 7 &&
      !this.data.readAlerts.includes(`${i.centreId}-${i.medicineId}`)
    ).length;

    document.getElementById("kpi-centres-count").textContent = centresCount;
    document.getElementById("kpi-stock-units").textContent = totalStock.toLocaleString();
    document.getElementById("kpi-critical-count").textContent = critCount;
    document.getElementById("kpi-seven-day-count").textContent = sevenDays;
    document.getElementById("btn-crit-count").textContent = critCount;
    document.getElementById("sidebar-alert-badge").textContent = critCount;

    const bellBadge = document.getElementById("notif-bell-badge");
    if (unreadAlerts > 0) {
      bellBadge.textContent = unreadAlerts;
      bellBadge.style.display = "inline-flex";
    } else {
      bellBadge.textContent = "0";
      bellBadge.style.display = "none";
    }
  }

  renderDashboardUrgentTable() {
    const tbody = document.getElementById("dashboard-urgent-tbody");
    const list = this.getEnrichedInventory().filter(i => i.daysRemaining <= 5).sort((a,b) => a.daysRemaining - b.daysRemaining).slice(0, 8);

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 24px; color: var(--status-healthy);"><i class="fa-solid fa-circle-check"></i> No immediate critical deficits in this view.</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(item => `
      <tr>
        <td style="color:var(--text-dim); font-size:0.75rem;">${item.centre.district}</td>
        <td style="font-weight: 600;">${item.centre.name}</td>
        <td>
          <strong>${item.med.generic}</strong>
          <div style="font-size:0.72rem; color:var(--text-dim);">${item.med.form}</div>
        </td>
        <td class="mono">${item.totalStock}</td>
        <td class="mono">${item.dailyConsumption}/d</td>
        <td class="mono" style="color: var(--status-critical); font-weight:700;">${item.daysRemaining} days</td>
        <td><span class="badge ${item.daysRemaining <= 2 ? 'badge-critical' : 'badge-warning'}">${item.status}</span></td>
        <td>
          <button class="btn btn-cyan btn-sm" onclick="MediApp.navigate('section-transfers')">
            <i class="fa-solid fa-arrow-right-arrow-left"></i> Check Peer Transfer
          </button>
        </td>
      </tr>
    `).join("");
  }

  // Medicine Inventory: Pure read/view with Previous/Next pagination (no issue button)
  renderInventoryTable() {
    const tbody = document.getElementById("inventory-tbody");
    const search = (document.getElementById("global-search").value || "").toLowerCase().trim();
    const cat = document.getElementById("inv-filter-category").value;
    const status = document.getElementById("inv-filter-status").value;
    const sort = document.getElementById("inv-sort-by").value;

    let list = this.getEnrichedInventory().filter(item => {
      const matchSearch = item.med.generic.toLowerCase().includes(search) || item.centre.name.toLowerCase().includes(search);
      const matchCat = cat === "ALL" || item.med.cat === cat;
      const matchStatus = status === "ALL" || item.status === status;
      return matchSearch && matchCat && matchStatus;
    });

    list.sort((a,b) => {
      if (sort === "days-asc") return a.daysRemaining - b.daysRemaining;
      if (sort === "name-asc") return a.med.generic.localeCompare(b.med.generic);
      if (sort === "stock-asc") return a.totalStock - b.totalStock;
      if (sort === "stock-desc") return b.totalStock - a.totalStock;
      return 0;
    });

    const total = list.length;
    const totalPages = Math.ceil(total / this.inventoryPageSize) || 1;
    if (this.inventoryPage > totalPages) this.inventoryPage = totalPages;
    if (this.inventoryPage < 1) this.inventoryPage = 1;
    const start = (this.inventoryPage - 1) * this.inventoryPageSize;
    const pageItems = list.slice(start, start + this.inventoryPageSize);

    if (pageItems.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 28px; color: var(--text-dim);">No matching medicine records found.</td></tr>`;
    } else {
      tbody.innerHTML = pageItems.map(item => `
        <tr>
          <td class="mono" style="color:var(--accent-primary);">${item.med.id}</td>
          <td><strong>${item.med.generic}</strong> <div style="font-size:0.72rem; color:var(--text-dim);">${item.med.form}</div></td>
          <td><span style="font-size:0.75rem; color:var(--text-muted);">${item.med.cat}</span></td>
          <td style="font-size:0.75rem; color:var(--text-dim);">${item.centre.district}</td>
          <td><span style="font-size:0.8rem; font-weight:500;">${item.centre.name}</span></td>
          <td class="mono" style="font-weight:700;">${item.totalStock}</td>
          <td class="mono" style="color:var(--text-muted);">${item.dailyConsumption}/d</td>
          <td class="mono" style="font-weight:700; ${item.daysRemaining <= 2 ? 'color:var(--status-critical);' : (item.daysRemaining <= 5 ? 'color:var(--status-warning);' : '')}">${item.daysRemaining}d</td>
          <td><span class="badge ${item.daysRemaining <= 2 ? 'badge-critical' : (item.daysRemaining <= 7 ? 'badge-warning' : 'badge-healthy')}">${item.status}</span></td>
        </tr>
      `).join("");
    }

    document.getElementById("inv-pagination-info").textContent = `Showing ${pageItems.length ? start + 1 : 0} - ${Math.min(start + this.inventoryPageSize, total)} of ${total}`;
    
    let pagHtml = `<button class="btn btn-secondary btn-sm" ${this.inventoryPage === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="MediApp.setInvPage(${this.inventoryPage - 1})"><i class="fa-solid fa-chevron-left"></i> Previous Page</button>`;
    pagHtml += `<span style="padding: 5px 12px; font-weight:700; color:var(--accent-primary); display:flex; align-items:center;" class="mono">Page ${this.inventoryPage} of ${totalPages}</span>`;
    pagHtml += `<button class="btn btn-secondary btn-sm" ${this.inventoryPage === totalPages ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="MediApp.setInvPage(${this.inventoryPage + 1})">Next Page <i class="fa-solid fa-chevron-right"></i></button>`;
    document.getElementById("inv-pagination-controls").innerHTML = pagHtml;
  }

  setInvPage(p) {
    this.inventoryPage = p;
    this.renderInventoryTable();
  }

  renderForecastTable() {
    const tbody = document.getElementById("forecast-table-body");
    const list = this.getEnrichedInventory().filter(i => i.daysRemaining <= 14).sort((a,b) => a.daysRemaining - b.daysRemaining);

    tbody.innerHTML = list.map(item => `
      <tr>
        <td style="font-size:0.75rem; color:var(--text-dim);">${item.centre.district}</td>
        <td><strong>${item.centre.name}</strong></td>
        <td>${item.med.generic} (${item.med.form})</td>
        <td class="mono">${item.totalStock}</td>
        <td class="mono">${item.dailyConsumption}/d</td>
        <td class="mono" style="font-weight:700; ${item.daysRemaining <= 2 ? 'color:var(--status-critical);' : ''}">${item.daysRemaining} days</td>
        <td class="mono" style="font-size:0.75rem;">${item.runOutDate}</td>
        <td>
          <button class="btn btn-cyan btn-sm" onclick="MediApp.navigate('section-transfers')">
            <i class="fa-solid fa-arrow-right-arrow-left"></i> Check Peer Transfer
          </button>
        </td>
      </tr>
    `).join("");
  }

  renderAlerts() {
    const container = document.getElementById("alerts-cards-container");
    const list = this.getEnrichedInventory().filter(i => i.daysRemaining <= 7);

    document.getElementById("alert-tab-count-all").textContent = list.length;
    document.getElementById("alert-tab-count-crit").textContent = list.filter(i => i.daysRemaining <= 2).length;
    document.getElementById("alert-tab-count-warn").textContent = list.filter(i => i.daysRemaining > 2).length;

    container.innerHTML = list.map(item => {
      const isCrit = item.daysRemaining <= 2;
      return `
        <div class="card" style="border-left: 4px solid ${isCrit ? 'var(--status-critical)' : 'var(--status-warning)'}; background: ${isCrit ? 'var(--status-critical-bg)' : 'var(--status-warning-bg)'};">
          <div class="flex-between" style="flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 2px;">${item.centre.district} &bull; ${item.centre.name}</div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-white);">
                ${item.med.generic} (${item.med.form})
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                Usable stock of <strong class="mono" style="color:var(--text-white);">${item.totalStock} units</strong> exhausts in <strong class="mono" style="color:${isCrit ? 'var(--status-critical)' : 'var(--status-warning)'};">${item.daysRemaining} days</strong>.
              </p>
            </div>
            <div style="display:flex; gap: 8px;">
              <button class="btn btn-cyan btn-sm" onclick="MediApp.navigate('section-transfers')">
                <i class="fa-solid fa-arrow-right-arrow-left"></i> Peer Transfer
              </button>
              <button class="btn btn-secondary btn-sm" onclick="MediApp.prefillRestock('${item.centreId}', '${item.medicineId}')">
                District Reorder
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    const dropList = document.getElementById("notif-dropdown-list");
    const unreadItems = list.filter(item => !this.data.readAlerts.includes(`${item.centreId}-${item.medicineId}`));

    if (unreadItems.length === 0) {
      dropList.innerHTML = `<div style="text-align:center; padding:18px; color:var(--text-dim); font-size:0.8rem;">No active unread warnings.</div>`;
    } else {
      dropList.innerHTML = unreadItems.slice(0, 5).map(item => `
        <div style="padding: 8px; border-bottom: 1px solid var(--border-subtle); font-size: 0.775rem;">
          <div style="font-weight: 700; color: var(--status-critical);">${item.med.generic} &bull; ${item.daysRemaining}d left</div>
          <div style="color: var(--text-muted);">${item.centre.name} (${item.centre.district})</div>
        </div>
      `).join("");
    }
  }

  renderCentres() {
    const container = document.getElementById("centres-grid-container");
    let available = PHC_CENTRES;
    if (this.selectedDistrict !== "ALL") {
      available = PHC_CENTRES.filter(c => c.district === this.selectedDistrict);
    }

    container.innerHTML = available.map(centre => {
      const invList = this.getEnrichedInventory(centre.district, centre.id);
      const totalUnits = invList.reduce((a, b) => a + b.totalStock, 0);
      const crits = invList.filter(i => i.daysRemaining <= 2).length;
      const score = Math.max(10, Math.min(100, Math.round(100 - (crits * 15))));

      return `
        <div class="card">
          <div class="flex-between" style="margin-bottom: 8px;">
            <h4 style="font-size: 1.05rem; font-weight: 700;">${centre.name}</h4>
            <span class="mono" style="font-weight:700; color:${score >= 80 ? 'var(--status-healthy)' : 'var(--status-critical)'};">${score}% Health</span>
          </div>
          <div style="font-size: 0.75rem; color: var(--accent-primary); margin-bottom: 12px;">
            <i class="fa-solid fa-map-pin"></i> ${centre.district} &bull; ${centre.beds} Beds
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px;">
            <div style="background: rgba(0, 0, 0, 0.06); padding: 8px; border-radius: 8px;">
              <div style="font-size: 0.68rem; color: var(--text-dim);">TOTAL UNITS</div>
              <div style="font-size: 1rem; font-weight: 700;" class="mono">${totalUnits.toLocaleString()}</div>
            </div>
            <div style="background: rgba(0, 0, 0, 0.06); padding: 8px; border-radius: 8px;">
              <div style="font-size: 0.68rem; color: var(--text-dim);">CRITICAL DEFICITS</div>
              <div style="font-size: 1rem; font-weight: 700; color: var(--status-critical);" class="mono">${crits}</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="MediApp.filterForSingleCentre('${centre.district}', '${centre.id}')">
            View Facility Inventory
          </button>
        </div>
      `;
    }).join("");
  }

  filterForSingleCentre(district, centreId) {
    this.selectedDistrict = district;
    this.selectedCentre = centreId;
    document.getElementById("top-district-select").value = district;
    this.updateCentreDropdown();
    document.getElementById("top-phc-select").value = centreId;
    this.navigate("section-inventory");
    this.renderAll();
  }

  renderRestocks() {
    const tbody = document.getElementById("restock-tbody");
    if (this.data.restocks.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 24px; color: var(--text-dim);">No pending district replenishment indents recorded.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.data.restocks.map(r => {
      const c = PHC_CENTRES.find(c => c.id === r.centreId);
      const m = this.data.catalogue.find(m => m.id === r.medicineId);
      return `
        <tr>
          <td class="mono" style="color:var(--accent-primary);">${r.id}</td>
          <td class="mono" style="font-size:0.75rem;">${r.date}</td>
          <td>${c ? c.name : r.centreId}</td>
          <td><strong>${m ? m.generic : r.medicineId}</strong></td>
          <td class="mono" style="font-weight:700;">${r.quantity}</td>
          <td><span class="badge ${r.priority === 'CRITICAL' ? 'badge-critical' : 'badge-warning'}">${r.priority}</span></td>
          <td><span class="badge badge-info">${r.status}</span></td>
          <td>
            <button class="btn btn-primary btn-sm" onclick="MediApp.receiveRestock('${r.id}')">Confirm Receipt</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  receiveRestock(reqId) {
    const r = this.data.restocks.find(x => x.id === reqId);
    if (!r) return;
    const inv = this.data.inventory.find(i => i.centreId === r.centreId && i.medicineId === r.medicineId);
    if (inv) inv.totalStock += r.quantity;
    this.data.restocks = this.data.restocks.filter(x => x.id !== reqId);
    this.data.history.unshift({
      timestamp: new Date().toISOString(),
      centreId: r.centreId,
      medicineId: r.medicineId,
      type: "DISTRICT_RECEIPT",
      quantity: r.quantity,
      reason: `Fulfillment of indent ${r.id}`
    });
    this.saveState();
    this.renderAll();
    this.updateCharts();
    this.showToast(`Restock received and added to centre stock.`, "success");
  }

  renderHistory() {
    const tbody = document.getElementById("history-tbody");
    if (this.data.history.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color: var(--text-dim);">No transactions logged.</td></tr>`;
      return;
    }
    tbody.innerHTML = this.data.history.slice(0, 40).map(h => {
      const c = PHC_CENTRES.find(c => c.id === h.centreId);
      const m = this.data.catalogue.find(m => m.id === h.medicineId);
      const isOut = h.quantity < 0;
      return `
        <tr>
          <td class="mono" style="font-size:0.75rem; color:var(--text-muted);">${new Date(h.timestamp).toLocaleTimeString()}</td>
          <td>${c ? c.name : h.centreId}</td>
          <td><strong>${m ? m.generic : h.medicineId}</strong></td>
          <td><span class="badge ${h.type.includes('TRANSFER') ? 'badge-info' : (isOut ? 'badge-warning' : 'badge-healthy')}">${h.type}</span></td>
          <td class="mono" style="font-weight:700; ${isOut ? 'color:var(--status-critical);' : 'color:var(--status-healthy);'}">${isOut ? '' : '+'}${h.quantity}</td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${h.reason}</td>
        </tr>
      `;
    }).join("");
  }

  renderReports() {
    const tbody = document.getElementById("reports-centre-matrix-tbody");
    let available = PHC_CENTRES;
    if (this.selectedDistrict !== "ALL") {
      available = PHC_CENTRES.filter(c => c.district === this.selectedDistrict);
    }

    tbody.innerHTML = available.map(c => {
      const invList = this.getEnrichedInventory(c.district, c.id);
      const total = invList.reduce((a, b) => a + b.totalStock, 0);
      const crits = invList.filter(i => i.daysRemaining <= 2).length;
      const score = Math.max(10, Math.min(100, Math.round(100 - (crits * 15))));

      return `
        <tr>
          <td style="font-weight:700;">${c.name}</td>
          <td style="color:var(--text-muted);">${c.district}</td>
          <td class="mono">${invList.length}</td>
          <td class="mono" style="font-weight:700;">${total.toLocaleString()}</td>
          <td class="mono" style="color:var(--status-critical); font-weight:700;">${crits}</td>
          <td><span class="mono" style="font-weight:700; color:${score >= 80 ? 'var(--status-healthy)' : 'var(--status-critical)'};">${score}%</span></td>
        </tr>
      `;
    }).join("");
  }

  openQuickRecordModal() {
    const u = MediAuth ? MediAuth.currentUser : null;
    const selCentre = document.getElementById("modal-tx-centre");
    const selMed = document.getElementById("modal-tx-medicine");

    if (u && u.role === "primary") {
      const myCentre = PHC_CENTRES.find(c => c.id === u.centreId);
      selCentre.innerHTML = `<option value="${u.centreId}">${myCentre ? myCentre.name : u.centreId}</option>`;
    } else {
      let available = PHC_CENTRES;
      if (this.selectedDistrict !== "ALL") {
        available = PHC_CENTRES.filter(c => c.district === this.selectedDistrict);
      }
      selCentre.innerHTML = available.map(c => `<option value="${c.id}">${c.name} (${c.district})</option>`).join("");
    }

    selMed.innerHTML = this.data.catalogue.map(m => `<option value="${m.id}">${m.generic} (${m.form})</option>`).join("");
    this.openModal("modal-record-stock");
  }

  prefillRestock(centreId, medicineId) {
    const selCentre = document.getElementById("modal-restock-centre");
    const selMed = document.getElementById("modal-restock-medicine");
    selCentre.innerHTML = PHC_CENTRES.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
    selMed.innerHTML = this.data.catalogue.map(m => `<option value="${m.id}">${m.generic}</option>`).join("");
    selCentre.value = centreId;
    selMed.value = medicineId;
    this.openModal("modal-create-restock");
  }

  handleStockTransaction() {
    const centreId = document.getElementById("modal-tx-centre").value;
    const medicineId = document.getElementById("modal-tx-medicine").value;
    const type = document.getElementById("modal-tx-type").value;
    const qty = parseInt(document.getElementById("modal-tx-qty").value) || 0;
    const reason = document.getElementById("modal-tx-reason").value.trim() || "Clinical issue";

    if (qty <= 0) {
      this.showToast("Enter a valid quantity.", "error");
      return;
    }

    let inv = this.data.inventory.find(i => i.centreId === centreId && i.medicineId === medicineId);
    if (!inv) return;

    if (type === "DISPENSE") {
      if (inv.totalStock < qty) {
        this.showToast(`Insufficient stock: Only ${inv.totalStock} available!`, "error");
        return;
      }
      inv.totalStock -= qty;
    } else if (type === "RECEIPT") {
      inv.totalStock += qty;
    } else {
      inv.totalStock = qty;
    }

    this.data.history.unshift({
      timestamp: new Date().toISOString(),
      centreId,
      medicineId,
      type,
      quantity: type === "DISPENSE" ? -qty : qty,
      reason
    });

    this.saveState();
    this.closeModals();
    this.renderAll();
    this.updateCharts();
    this.showToast("Stock change applied.", "success");
  }

  handleCreateRestock() {
    const centreId = document.getElementById("modal-restock-centre").value;
    const medicineId = document.getElementById("modal-restock-medicine").value;
    const qty = parseInt(document.getElementById("modal-restock-qty").value) || 200;
    const priority = document.getElementById("modal-restock-priority").value;

    this.data.restocks.unshift({
      id: `ORD-${Math.floor(1000 + Math.random()*9000)}`,
      date: new Date().toISOString().split("T")[0],
      centreId,
      medicineId,
      quantity: qty,
      priority,
      status: "Pending Warehouse"
    });

    this.saveState();
    this.closeModals();
    this.renderRestocks();
    this.showToast("District reorder requisition generated.", "success");
  }

  openModal(id) { document.getElementById(id).classList.add("open"); }
  closeModals() { document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open")); }

  showToast(msg, type = "info") {
    const c = document.getElementById("toast-container");
    const t = document.createElement("div");
    t.className = `toast ${type}`;
    t.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--accent-primary);"></i> <span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3500);
  }

  exportCSV(type) {
    const list = this.getEnrichedInventory();
    let rows = [["District", "Centre", "Medicine", "Stock", "Burn", "DaysLeft", "Status"]];
    list.forEach(i => rows.push([i.centre.district, `"${i.centre.name}"`, `"${i.med.generic}"`, i.totalStock, i.dailyConsumption, i.daysRemaining, i.status]));
    const csv = "data:text/csv;charset=utf-8," + rows.map(r => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href = encodeURI(csv);
    a.download = `vmeditrix-inventory-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    this.showToast("CSV export initiated.", "success");
  }

  initCharts() {
    Chart.defaults.color = this.theme === "dark" ? '#94c3d8' : '#3a6278';
    Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Inter", sans-serif';

    const ctx1 = document.getElementById("chart-status-breakdown");
    if (ctx1) {
      this.charts.status = new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['Critical (0-2d)', 'High Risk (3-5d)', 'Warning (6-7d)', 'Healthy (>7d)'],
          datasets: [{
            data: [0,0,0,0],
            backgroundColor: ['#f43f5e', '#fbbf24', '#00d2eb', '#2dd4bf'],
            borderWidth: 2,
            borderColor: this.theme === "dark" ? '#081c2c' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } }
        }
      });
    }

    const ctx2 = document.getElementById("chart-centre-comparison");
    if (ctx2) {
      this.charts.centre = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: [],
          datasets: [{
            label: 'Critical Shortages',
            data: [],
            backgroundColor: '#00d2eb',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { grid: { color: 'rgba(0, 210, 235, 0.08)' } }, x: { grid: { display: false } } },
          plugins: { legend: { display: false } }
        }
      });
    }

    const ctx3 = document.getElementById("chart-forecast-horizon");
    if (ctx3) {
      this.charts.horizon = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: ['Within 48h', '3 to 7 Days', '8 to 14 Days', 'Safe (> 14d)'],
          datasets: [{
            label: 'SKUs at Risk',
            data: [0, 0, 0, 0],
            backgroundColor: ['#f43f5e', '#fbbf24', '#00d2eb', '#2dd4bf'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { grid: { color: 'rgba(0, 210, 235, 0.08)' } } },
          plugins: { legend: { display: false } }
        }
      });
    }

    // Additional Forecast Graph: 14-Day Timeline Depletion Curve
    const ctx4 = document.getElementById("chart-forecast-timeline");
    if (ctx4) {
      this.charts.timeline = new Chart(ctx4, {
        type: 'line',
        data: {
          labels: ['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11', 'Day 14'],
          datasets: [{
            label: 'Simulated Network Inventory Run-Out',
            data: [100, 85, 70, 52, 38, 24, 12],
            borderColor: '#00d2eb',
            backgroundColor: 'rgba(0, 210, 235, 0.15)',
            fill: true,
            tension: 0.35
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { grid: { color: 'rgba(0, 210, 235, 0.08)' } } },
          plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } }
        }
      });
    }

    this.updateCharts();
  }

  updateCharts() {
    const list = this.getEnrichedInventory();
    const borderColor = this.theme === "dark" ? '#081c2c' : '#ffffff';

    if (this.charts.status) {
      let c1 = 0, c2 = 0, c3 = 0, c4 = 0;
      list.forEach(i => {
        if (i.daysRemaining <= 2) c1++;
        else if (i.daysRemaining <= 5) c2++;
        else if (i.daysRemaining <= 7) c3++;
        else c4++;
      });
      this.charts.status.data.datasets[0].data = [c1, c2, c3, c4];
      this.charts.status.data.datasets[0].borderColor = borderColor;
      this.charts.status.update();
    }

    if (this.charts.centre) {
      let available = PHC_CENTRES;
      if (this.selectedDistrict !== "ALL") {
        available = PHC_CENTRES.filter(c => c.district === this.selectedDistrict);
      }
      const topCentres = available.slice(0, 6);
      this.charts.centre.data.labels = topCentres.map(c => c.name.split("–")[1] || c.name.split("-")[1] || c.name.slice(0,14));
      this.charts.centre.data.datasets[0].data = topCentres.map(c => {
        return this.getEnrichedInventory(c.district, c.id).filter(i => i.daysRemaining <= 5).length;
      });
      this.charts.centre.update();
    }

    if (this.charts.horizon) {
      let h2 = 0, h7 = 0, h14 = 0, hSafe = 0;
      list.forEach(i => {
        if (i.daysRemaining <= 2) h2++;
        else if (i.daysRemaining <= 7) h7++;
        else if (i.daysRemaining <= 14) h14++;
        else hSafe++;
      });
      this.charts.horizon.data.datasets[0].data = [h2, h7, h14, hSafe];
      this.charts.horizon.update();
    }

    if (this.charts.timeline) {
      const totalUnits = list.reduce((a, b) => a + b.totalStock, 0) || 1000;
      const totalBurn = list.reduce((a, b) => a + b.dailyConsumption, 0) || 50;
      const timelineData = [1, 3, 5, 7, 9, 11, 14].map(day => Math.max(0, totalUnits - (totalBurn * day)));
      this.charts.timeline.data.datasets[0].data = timelineData;
      this.charts.timeline.update();
    }
  }

  renderAll() {
    this.renderKPIs();
    this.renderTransfers();
    this.renderDashboardUrgentTable();
    this.renderInventoryTable();
    this.renderForecastTable();
    this.renderAlerts();
    this.renderCentres();
    this.renderRestocks();
    this.renderHistory();
    this.renderReports();
  }
}

let MediApp = null;
let MediAuth = null;
let MediCitizen = null;

window.addEventListener("DOMContentLoaded", () => {
  MediApp = new MediWatchEngine();
  MediAuth = new AuthController();
  MediCitizen = new CitizenPortal();

  // If primary or secondary user has logged in once, bypass login screen directly
  if (MediAuth.currentUser) {
    MediAuth.dismissAuthGateway();
  } else {
    document.getElementById("auth-screen").style.display = "flex";
  }
});