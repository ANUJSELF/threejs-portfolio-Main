export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/ANUJSELF", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://www.linkedin.com/in/anuj-tiwari-15548a180/", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://leetcode.com/u/SELFANUJ/", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://www.codechef.com/users/anujtiwarikr", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.hackerrank.com/profile/2003480130011_IT", "new");
};

export const openProjectTab = (anpr, onObject) => {
  if (onObject.object.uuid === anpr.current.uuid)
    window.open("https://github.com/ANUJSELF/ANPR-Project", "new");
};

export const openProjectGithub = (anpr, onObject) => {
  if (onObject.object.uuid === anpr.current.uuid)
    window.open("https://github.com/ANUJSELF/ANPR-Project", "new");
};

