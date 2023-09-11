function getTermsToHash(terms) {
  const newTerms = new Map();
  terms.forEach((term) => {
    const [idx, value] = term.split(" ");
    newTerms.set(idx, Number(value));
  });
  return newTerms;
}
function getUpdateTerms(newTerms, privacies) {
  let updateTerms = [];
  privacies.forEach((p) => {
    const [p_date, p_term] = p.split(" ");
    const date = new Date(p_date);
    const termValue = newTerms.get(p_term);

    let year = date.getFullYear();
    let month = date.getMonth() + termValue;
    if (month > 12) {
      month -= 12;
      year++;
    }
    date.setFullYear(year);
    date.setMonth(month);
    updateTerms.push(date);
  });
  return updateTerms;
}
function solution(today, terms, privacies) {
  // const [year, month, day] = today.split(".");
  const newTerms = getTermsToHash(terms); // Map
  const updateTerms = getUpdateTerms(newTerms, privacies);
  const result = [];
  updateTerms.forEach((date, idx) => {
    console.log(
      "🚀 ~ file: test.js:36 ~ updateTerms.forEach ~ date:",
      date,
      today
    );

    if (date <= new Date(today)) result.push(idx + 1);
  });
  return result;
}

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
