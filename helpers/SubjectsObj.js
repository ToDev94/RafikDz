const makeObj = (Obj, levelObj) => {
  Obj.push(...levelObj);
  return Obj;
};

const getSubjectsObj = (level) => {
  let data;
  const subjectsS = [
    {
      id: 1,
      name: "اللغة العربية",
      link: `subject/${level}/ar`,
    },
    {
      id: 2,
      name: "اللغة الإنجليزية",
      link: `subject/${level}/en`,
    },
    {
      id: 3,
      name: "اللغة الفرنسية",
      link: `subject/${level}/fr`,
    },
    {
      id: 4,
      name: "اللغة الامازيغية",
      link: `subject/${level}/am`,
    },
    {
      id: 5,
      name: "الرياضيات",
      link: `subject/${level}/mth`,
    },
    {
      id: 6,
      name: "العلوم الطبيعية",
      link: `subject/${level}/sn`,
    },
    {
      id: 7,
      name: "العلوم الفيزيائية",
      link: `subject/${level}/phy`,
    },
    {
      id: 8,
      name: "التاريخ و الجغرافيا",
      link: `subject/${level}/hisgeo`,
    },
    {
      id: 9,
      name: "العلوم الأسلامية",
      link: `subject/${level}/si`,
    },
    {
      id: 10,
      name: "التربية الفنية",
      link: `subject/${level}/eduart`,
    },
  ];
  const subjectsM = [
    {
      id: 1,
      name: "اللغة العربية",
      link: `subject/${level}/ar`,
    },
    {
      id: 2,
      name: "اللغة الإنجليزية",
      link: `subject/${level}/en`,
    },
    {
      id: 3,
      name: "اللغة الفرنسية",
      link: `subject/${level}/fr`,
    },
    {
      id: 4,
      name: "اللغة الامازيغية",
      link: `subject/${level}/am`,
    },
    {
      id: 5,
      name: "الرياضيات",
      link: `subject/${level}/mth`,
    },
    {
      id: 6,
      name: "العلوم الطبيعية",
      link: `subject/${level}/sn`,
    },
    {
      id: 7,
      name: "العلوم الفيزيائية",
      link: `subject/${level}/phy`,
    },
    {
      id: 8,
      name: "التاريخ و الجغرافيا",
      link: `subject/${level}/hisgeo`,
    },
    {
      id: 9,
      name: "التربية الأسلامية",
      link: `subject/${level}/si`,
    },
    {
      id: 10,
      name: "التربية الفنية",
      link: `subject/${level}/eduart`,
    },

    {
      id: 12,
      name: "الإعلام الآلي",
      link: `subject/${level}/info`,
    },
    {
      id: 13,
      name: "التربية مدنية",
      link: `subject/${level}/educiv`,
    },
    {
      id: 14,
      name: "التربية موسيقية",
      link: `subject/${level}/edumz`,
    },
  ];
  const subjectsP = [
    {
      id: 1,
      name: "اللغة العربية",
      link: `subject/${level}/ar`,
    },
    {
      id: 2,
      name: "الرياضيات",
      link: `subject/${level}/mth`,
    },

    {
      id: 3,
      name: "التربية الأسلامية",
      link: `subject/${level}/si`,
    },

    {
      id: 4,
      name: "التربية مدنية",
      link: `subject/${level}/educiv`,
    },
    {
      id: 4,
      name: "التربية العلمية و التكنولوجية",
      link: `subject/${level}/educiv`,
    },
  ];

  switch (level) {
    case "1s":
      const Obj1 = [
        { id: 25, name: "التكنولوجيا", link: `subject/${level}/tech` },
      ];
      data = makeObj(subjectsS, Obj1);

      break;
    case "2s":
    case "3s":
      const Obj2 = [
        { id: 25, name: "الهندسة الكهربائية", link: `subject/${level}/elec` },
        { id: 26, name: "الهندسة المدنية", link: `subject/${level}/civileng` },
        { id: 27, name: "القانون", link: `subject/${level}/law` },
        {
          id: 28,
          name: "التسيير المحاسبي و المالي",
          link: `subject/${level}/countab`,
        },
        {
          id: 29,
          name: "الاقتصاد و المانجمنت",
          link: `subject/${level}/ecomanag`,
        },
        {
          id: 30,
          name: "هندسة الطرائق",
          link: `subject/${level}/genpro`,
        },
        {
          id: 31,
          name: "هندسة الطرائق",
          link: `subject/${level}/genpro`,
        },
        {
          id: 32,
          name: "اللغة الالمانية",
          link: `subject/${level}/ger`,
        },
        {
          id: 33,
          name: "اللغة الاسبانية",
          link: `subject/${level}/spa`,
        },
        {
          id: 33,
          name: "الفلسفة",
          link: `subject/${level}/phil`,
        },
        {
          id: 34,
          name: "اللغة الايطالية",
          link: `subject/${level}/ita`,
        },
      ];
      data = makeObj(subjectsS, Obj2);
      break;
    case "1m":
    case "2m":
    case "3m":
    case "4m":
      data = makeObj(subjectsM, []);
      break;

    case "pr":
      data = makeObj(subjectsP, []);
      break;

    case "1p":
    case "2p":
      const Obj3 = [
        { id: 25, name: "اللغة الامازيغية", link: `subject/${level}/amzi` },
        { id: 26, name: "التربية الموسيقية", link: `subject/${level}/edumuz` },
        { id: 27, name: "التربية فنية", link: `subject/${level}/eduart` },
        { id: 28, name: "اللغة الفرنسية", link: `subject/${level}/fr` },
        { id: 29, name: "اللغة الانجليزية", link: `subject/${level}/eng` },
      ];
      data = makeObj(subjectsP, Obj3);
      break;
    case "3p":
    case "4p":
    case "5p":
      const Obj4 = [
        { id: 25, name: "اللغة الامازيغية", link: `subject/${level}/amzi` },
        { id: 26, name: "التربية الموسيقية", link: `subject/${level}/edumuz` },
        { id: 27, name: "التربية فنية", link: `subject/${level}/eduart` },
        { id: 28, name: "اللغة الفرنسية", link: `subject/${level}/fr` },
        { id: 29, name: "اللغة الانجليزية", link: `subject/${level}/eng` },
        {
          id: 30,
          name: "التاريخ و الجغرافيا",
          link: `subject/${level}/hisgeo`,
        },
      ];
      data = makeObj(subjectsP, Obj4);
      break;
    default:
      break;
  }
  return data;
};

export default getSubjectsObj;

export const getSerialzedObjs = () => {
  return;
};
