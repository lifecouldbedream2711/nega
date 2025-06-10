var d = ["19", "95", "121", "214", "136", "186", "86"];

for (const x of d) {
  const t = document.getElementById(x);
  if (t) t.click(); // chỉ click nếu phần tử tồn tại
}
