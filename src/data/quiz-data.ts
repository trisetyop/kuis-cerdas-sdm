export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}
export interface QuizCategory {
  title: string;
  questions: Question[];
}
export const quizData: QuizCategory[] = [
  {
    title: "Fungsi dan Pengembangan",
    questions: [
      {
        question: "Apa fungsi utama Manajemen Sumber Daya Manusia (MSDM) dalam sebuah organisasi?",
        options: [
          "Hanya berfokus pada administrasi penggajian dan absensi.",
          "Memastikan kepatuhan hukum dan mengurangi risiko tuntutan.",
          "Mengelola aset sumber daya manusia secara strategis untuk mencapai tujuan organisasi.",
          "Mengorganisir acara dan kegiatan rekreasi karyawan.",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Pergeseran peran MSDM dari fokus administratif menjadi fokus strategis dikenal sebagai...",
        options: [
          "MSDM Global",
          "MSDM sebagai Mitra Strategis (Strategic Partner)",
          "Manajemen Personalia",
          "Hubungan Industrial",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Manakah di antara berikut yang BUKAN merupakan fungsi operasional MSDM?",
        options: [
          "Rekrutmen dan seleksi",
          "Pelatihan dan pengembangan",
          "Menetapkan strategi bisnis utama perusahaan",
          "Pemberian kompensasi dan tunjangan",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Istilah \"Manajemen Personalia\" sering dianggap lebih tradisional dibandingkan \"Manajemen Sumber Daya Manusia\" karena...",
        options: [
          "Manajemen Personalia lebih fokus pada aspek strategis.",
          "Manajemen Personalia lebih reaktif dan administratif, sedangkan MSDM proaktif dan strategis.",
          "Manajemen Personalia hanya ada di perusahaan besar.",
          "MSDM adalah istilah lama yang sudah tidak dipakai.",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Tujuan akhir dari pengembangan MSDM adalah...",
        options: [
          "Meningkatkan jumlah karyawan di perusahaan.",
          "Mengurangi biaya operasional seminimal mungkin.",
          "Menciptakan tenaga kerja yang kompeten, termotivasi, dan selaras dengan strategi perusahaan.",
          "Menggantikan semua pekerjaan manusia dengan teknologi.",
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    title: "Sumber Daya Manusia dan Keunggulan",
    questions: [
      {
        question: "Bagaimana sumber daya manusia dapat menjadi sumber keunggulan kompetitif yang berkelanjutan (sustainable competitive advantage)?",
        options: [
          "Dengan membayar gaji karyawan lebih rendah dari pesaing.",
          "Ketika karyawan memiliki keterampilan yang langka, berharga, sulit ditiru, dan terorganisir (VRIO).",
          "Dengan merekrut karyawan dalam jumlah yang sangat banyak.",
          "Dengan menerapkan aturan perusahaan yang sangat ketat.",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Konsep yang menghubungkan praktik-praktik MSDM dengan tujuan dan strategi jangka panjang organisasi disebut...",
        options: [
          "Perencanaan SDM",
          "Manajemen Kinerja",
          "Manajemen SDM Strategis (SHRM)",
          "Analisis Jabatan",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Dalam kerangka VRIO, apa yang dimaksud dengan \"Imitability\" (Sulit Ditiru)?",
        options: [
          "Kemampuan perusahaan untuk meniru produk pesaing.",
          "Budaya dan keterampilan karyawan yang unik sehingga pesaing tidak dapat dengan mudah menirunya.",
          "Biaya untuk merekrut karyawan baru.",
          "Kemudahan karyawan untuk berpindah ke perusahaan lain.",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "\"Human Capital\" atau Modal Manusia merujuk pada...",
        options: [
          "Total biaya gaji yang dikeluarkan perusahaan untuk karyawan.",
          "Jumlah total karyawan yang dimiliki perusahaan.",
          "Aset tidak berwujud yang terdiri dari pengetahuan, keterampilan, dan kemampuan kolektif karyawan.",
          "Gedung kantor dan peralatan yang digunakan oleh karyawan.",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Peran MSDM dalam menciptakan keunggulan bersaing adalah dengan cara...",
        options: [
          "Fokus pada pengurangan biaya tenaga kerja sebagai prioritas utama.",
          "Menerapkan praktik terbaik (best practices) yang dapat meningkatkan kapabilitas organisasi.",
          "Menyerahkan seluruh fungsi SDM ke pihak eksternal (outsourcing).",
          "Hanya fokus pada pemenuhan aspek legal.",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    title: "Aspek Legal Manajemen Sumber Daya",
    questions: [
        {
            question: "Di Indonesia, undang-undang utama yang mengatur hubungan kerja antara pemberi kerja dan pekerja adalah...",
            options: [
                "UU No. 13 Tahun 2003 tentang Ketenagakerjaan",
                "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
                "UU No. 40 Tahun 2004 tentang SJSN",
                "UU No. 2 Tahun 2004 tentang PPHI",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "Perjanjian kerja untuk waktu tertentu (PKWT) BUKAN didasarkan pada...",
            options: [
                "Pekerjaan yang sekali selesai atau bersifat sementara.",
                "Pekerjaan yang bersifat musiman.",
                "Pekerjaan yang berhubungan dengan produk baru yang masih dalam percobaan.",
                "Pekerjaan yang bersifat tetap dan berkelanjutan (terus-menerus).",
            ],
            correctAnswerIndex: 3,
        },
        {
            question: "Pemutusan Hubungan Kerja (PHK) yang dilakukan tanpa alasan yang sah menurut undang-undang dapat dianggap sebagai...",
            options: [
                "PHK yang sah",
                "PHK secara sepihak yang tidak sah (illegal dismissal)",
                "Pengunduran diri sukarela",
                "Pensiun normal",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Diskriminasi dalam praktik MSDM, seperti dalam rekrutmen, dilarang. Contoh diskriminasi adalah...",
            options: [
                "Memilih kandidat berdasarkan kualifikasi dan kompetensi.",
                "Tidak mempekerjakan seseorang berdasarkan ras, agama, atau jenis kelaminnya, padahal ia mampu.",
                "Memberikan gaji yang lebih tinggi untuk jabatan yang lebih tinggi.",
                "Mewajibkan standar keterampilan tertentu untuk suatu pekerjaan.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Apa yang dimaksud dengan Perjanjian Kerja Bersama (PKB)?",
            options: [
                "Perjanjian antara satu karyawan dengan perusahaan.",
                "Perjanjian yang dibuat antara Serikat Pekerja/Buruh dengan pengusaha.",
                "Surat keputusan pengangkatan karyawan tetap.",
                "Daftar peraturan perusahaan yang dibuat sepihak oleh pengusaha.",
            ],
            correctAnswerIndex: 1,
        },
    ],
  },
  {
    title: "Perencanaan Sumber Daya Manusia",
    questions: [
        {
            question: "Apa langkah pertama dalam proses Perencanaan Sumber Daya Manusia (HRP)?",
            options: [
                "Melakukan rekrutmen besar-besaran.",
                "Melakukan evaluasi kinerja karyawan.",
                "Menganalisis tujuan strategis dan rencana bisnis organisasi.",
                "Memberikan pelatihan kepada karyawan.",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Proses memprediksi jumlah dan jenis karyawan yang dibutuhkan organisasi di masa depan disebut...",
            options: [
                "Peramalan Kebutuhan (Demand Forecasting)",
                "Peramalan Ketersediaan (Supply Forecasting)",
                "Analisis Kesenjangan (Gap Analysis)",
                "Analisis Jabatan (Job Analysis)",
            ],
            correctAnswerIndex: 0,
        },
        {
            question: "\"Skills inventory\" (inventarisasi keahlian) adalah alat yang digunakan dalam...",
            options: [
                "Peramalan kebutuhan SDM eksternal.",
                "Peramalan ketersediaan (pasokan) SDM internal.",
                "Menentukan gaji karyawan baru.",
                "Proses PHK karyawan.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Jika hasil perencanaan SDM menunjukkan adanya *labor surplus* (kelebihan tenaga kerja), tindakan apa yang mungkin diambil perusahaan?",
            options: [
                "Merekrut karyawan baru.",
                "Memberlakukan jam kerja lembur.",
                "Menawarkan program pensiun dini atau *golden handshake*.",
                "Menggunakan tenaga kerja *outsourcing*.",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Sebaliknya, jika terjadi *labor shortage* (kekurangan tenaga kerja), strategi yang dapat dilakukan adalah...",
            options: [
                "Melakukan PHK (layoff).",
                "Mengurangi jam kerja.",
                "Merekrut dari sumber eksternal atau melakukan alih daya (outsourcing).",
                "Memberlakukan pembekuan perekrutan (hiring freeze).",
            ],
            correctAnswerIndex: 2,
        },
    ],
  },
  {
    title: "Pengangkatan dan Pemberhentian Karyawan",
    questions: [
        {
            question: "Proses menarik sekelompok kandidat yang memenuhi syarat untuk mengisi lowongan pekerjaan disebut...",
            options: ["Seleksi", "Rekrutmen", "Orientasi", "Analisis Jabatan"],
            correctAnswerIndex: 1,
        },
        {
            question: "Keuntungan utama menggunakan sumber rekrutmen *internal* adalah...",
            options: [
                "Mendapatkan ide-ide dan perspektif baru dari luar.",
                "Biaya lebih murah dan dapat meningkatkan moral karyawan.",
                "Pilihan kandidatnya jauh lebih banyak.",
                "Tidak perlu melakukan proses seleksi.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Proses memilih individu terbaik dari kumpulan pelamar yang telah direkrut disebut...",
            options: ["Seleksi", "Rekrutmen", "Perencanaan SDM", "Penilaian Kinerja"],
            correctAnswerIndex: 0,
        },
        {
            question: "Proses memperkenalkan karyawan baru pada pekerjaan, rekan kerja, dan organisasi secara keseluruhan disebut...",
            options: ["Wawancara akhir", "Onboarding atau Orientasi", "Penilaian kinerja", "Pemberhentian"],
            correctAnswerIndex: 1,
        },
        {
            question: "Pemberhentian karyawan karena alasan efisiensi atau restrukturisasi organisasi (bukan karena kesalahan karyawan) dikenal sebagai...",
            options: [
                "Resign (Pengunduran diri)",
                "Dismissal (Pemecatan karena kesalahan)",
                "Layoff (PHK karena alasan ekonomi/organisasi)",
                "Retirement (Pensiun)",
            ],
            correctAnswerIndex: 2,
        },
    ],
  },
  {
    title: "Pengupahan dan Pemberian Tunjangan",
    questions: [
        {
            question: "Total kompensasi yang diterima karyawan terdiri dari dua komponen utama, yaitu...",
            options: [
                "Gaji pokok dan bonus",
                "Kompensasi finansial langsung dan tidak langsung (tunjangan)",
                "Gaji dan pengakuan non-finansial",
                "Upah per jam dan upah borongan",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Manakah dari berikut ini yang merupakan contoh kompensasi *tidak langsung* (tunjangan/benefit)?",
            options: [
                "Gaji bulanan",
                "Komisi penjualan",
                "Asuransi kesehatan yang dibayar perusahaan",
                "Bonus kinerja akhir tahun",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Proses sistematis untuk menentukan nilai relatif suatu pekerjaan dibandingkan pekerjaan lain dalam organisasi disebut...",
            options: [
                "Analisis Jabatan (Job Analysis)",
                "Evaluasi Jabatan (Job Evaluation)",
                "Penilaian Kinerja (Performance Appraisal)",
                "Survei Gaji (Salary Survey)",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Keadilan upah *eksternal* (external equity) merujuk pada...",
            options: [
                "Karyawan merasa gajinya adil dibandingkan rekan kerja di jabatan yang sama.",
                "Karyawan merasa gajinya adil dibandingkan jabatan lain di dalam perusahaan.",
                "Gaji yang dibayarkan perusahaan kompetitif dibandingkan perusahaan lain di pasar tenaga kerja yang sama.",
                "Karyawan merasa sistem penilaian kinerja adil.",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Tunjangan Hari Raya (THR) Keagamaan di Indonesia merupakan contoh dari...",
            options: [
                "Kompensasi variabel (insentif)",
                "Tunjangan tidak tetap",
                "Komponen upah yang wajib dibayarkan berdasarkan peraturan pemerintah",
                "Hadiah sukarela dari perusahaan",
            ],
            correctAnswerIndex: 2,
        },
    ],
  },
  {
    title: "Penilaian Kinerja, Penghargaan, dan Pengembangan Karier",
    questions: [
        {
            question: "Proses formal untuk mengevaluasi seberapa baik karyawan menjalankan tugasnya dan memberikan umpan balik disebut...",
            options: ["Penilaian Kinerja (Performance Appraisal)", "Analisis Kebutuhan Pelatihan", "Perencanaan Karier", "Wawancara Rekrutmen"],
            correctAnswerIndex: 0,
        },
        {
            question: "Salah satu tujuan utama dari penilaian kinerja adalah untuk...",
            options: [
                "Menghukum karyawan yang kinerjanya buruk.",
                "Mencari alasan untuk mem-PHK karyawan.",
                "Memberikan dasar untuk keputusan promosi, kenaikan gaji, dan kebutuhan pengembangan.",
                "Membandingkan karyawan satu sama lain tanpa tujuan yang jelas.",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Metode penilaian kinerja di mana umpan balik dikumpulkan dari berbagai sumber (atasan, bawahan, rekan kerja, dan diri sendiri) disebut...",
            options: ["Graphic Rating Scale", "Critical Incident Method", "360-Degree Feedback", "Management by Objectives (MBO)"],
            correctAnswerIndex: 2,
        },
        {
            question: "Rangkaian posisi atau jabatan yang dipegang seseorang selama masa kerjanya disebut...",
            options: ["Karier (Career)", "Pekerjaan (Job)", "Tugas (Task)", "Promosi (Promotion)"],
            correctAnswerIndex: 0,
        },
        {
            question: "Perbedaan antara penghargaan (rewards) intrinsik dan ekstrinsik adalah...",
            options: [
                "Intrinsik berupa uang, ekstrinsik berupa pujian.",
                "Intrinsik berasal dari kepuasan internal (rasa pencapaian), ekstrinsik berasal dari luar (gaji, bonus).",
                "Intrinsik diberikan oleh manajer, ekstrinsik oleh rekan kerja.",
                "Intrinsik untuk manajer, ekstrinsik untuk staf.",
            ],
            correctAnswerIndex: 1,
        },
    ],
  },
  {
    title: "Pelatihan dan Pengembangan",
    questions: [
        {
            question: "Perbedaan utama antara Pelatihan (Training) dan Pengembangan (Development) adalah...",
            options: [
                "Pelatihan untuk manajer, pengembangan untuk staf.",
                "Pelatihan fokus pada keterampilan saat ini, pengembangan fokus pada kapabilitas masa depan.",
                "Pelatihan dilakukan di dalam kelas, pengembangan di luar kantor.",
                "Pelatihan bersifat wajib, pengembangan bersifat sukarela.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Langkah pertama dan paling krusial dalam merancang program pelatihan adalah...",
            options: [
                "Memilih metode pelatihan.",
                "Melakukan Analisis Kebutuhan Pelatihan (Training Needs Analysis - TNA).",
                "Mengevaluasi hasil pelatihan.",
                "Menghitung anggaran pelatihan.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Pelatihan yang dilakukan langsung di tempat kerja sambil menjalankan pekerjaan, sering dibimbing oleh senior atau atasan, disebut...",
            options: ["Simulasi (Simulation)", "E-learning", "On-the-Job Training (OJT)", "Studi Kasus (Case Study)"],
            correctAnswerIndex: 2,
        },
        {
            question: "Menurut model evaluasi Kirkpatrick, level \"Learning\" (Pembelajaran) mengukur...",
            options: [
                "Apakah peserta menikmati pelatihan (Reaction).",
                "Sejauh mana peserta memperoleh pengetahuan atau keterampilan baru (Learning).",
                "Apakah peserta menerapkan apa yang dipelajari di pekerjaan (Behavior).",
                "Dampak pelatihan terhadap hasil bisnis (Results).",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Mentoring adalah bentuk pengembangan di mana...",
            options: [
                "Karyawan belajar mandiri melalui modul online.",
                "Karyawan dipindahkan ke berbagai departemen (rotasi kerja).",
                "Karyawan senior (mentor) membimbing karyawan junior (mentee).",
                "Karyawan baru mengikuti orientasi perusahaan.",
            ],
            correctAnswerIndex: 2,
        },
    ],
  },
  {
    title: "K3, Kepemimpinan, dan Produktivitas",
    questions: [
        {
            question: "Tujuan utama dari program Keselamatan dan Kesehatan Kerja (K3) adalah...",
            options: [
                "Meningkatkan denda bagi karyawan yang melanggar.",
                "Memenuhi persyaratan asuransi saja.",
                "Mencegah terjadinya kecelakaan kerja dan penyakit akibat kerja.",
                "Mengurangi jumlah hari libur karyawan.",
            ],
            correctAnswerIndex: 2,
        },
        {
            question: "Di Indonesia, undang-undang pokok yang menjadi dasar penerapan K3 di tempat kerja adalah...",
            options: ["UU No. 1 Tahun 1970", "UU No. 13 Tahun 2003", "UU No. 3 Tahun 1992", "UU No. 24 Tahun 2011"],
            correctAnswerIndex: 0,
        },
        {
            question: "Gaya kepemimpinan di mana seorang pemimpin menginspirasi dan memotivasi timnya untuk mencapai visi bersama, seringkali melalui karisma, disebut...",
            options: ["Kepemimpinan Otokratis", "Kepemimpinan Laissez-faire", "Kepemimpinan Transaksional", "Kepemimpinan Transformasional"],
            correctAnswerIndex: 3,
        },
        {
            question: "Produktivitas dalam konteks SDM paling baik diukur sebagai...",
            options: [
                "Jumlah jam kerja karyawan.",
                "Rasio antara output (hasil kerja) dan input (sumber daya yang digunakan).",
                "Tingkat absensi karyawan.",
                "Kepuasan kerja karyawan.",
            ],
            correctAnswerIndex: 1,
        },
        {
            question: "Seorang pemimpin yang fokus pada \"imbalan dan hukuman\" (rewards and punishments) untuk mencapai target adalah contoh dari gaya kepemimpinan...",
            options: ["Transaksional", "Transformasional", "Demokratis", "Situasional"],
            correctAnswerIndex: 0,
        },
    ],
  },
];
export const allQuestions: Question[] = quizData.flatMap(category => category.questions);