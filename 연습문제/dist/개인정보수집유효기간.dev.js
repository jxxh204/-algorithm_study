"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getTermsToHash(terms) {
  var newTerms = new Map();
  terms.forEach(function (term) {
    var _term$split = term.split(" "),
        _term$split2 = _slicedToArray(_term$split, 2),
        idx = _term$split2[0],
        value = _term$split2[1];

    newTerms.set(idx, Number(value));
  });
  return newTerms;
}

function getUpdateTerms(newTerms, privacies) {
  var updateTerms = [];
  privacies.forEach(function (p) {
    var _p$split = p.split(" "),
        _p$split2 = _slicedToArray(_p$split, 2),
        p_date = _p$split2[0],
        p_term = _p$split2[1];

    var date = new Date(p_date);
    var termValue = newTerms.get(p_term);
    var year = date.getFullYear();
    var month = date.getMonth() + termValue;

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
  var newTerms = getTermsToHash(terms); // Map

  var updateTerms = getUpdateTerms(newTerms, privacies);
  var result = [];
  updateTerms.forEach(function (date, idx) {
    console.log("🚀 ~ file: test.js:36 ~ updateTerms.forEach ~ date:", date, today);
    if (date <= new Date(today)) result.push(idx + 1);
  });
  return result;
}

console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));