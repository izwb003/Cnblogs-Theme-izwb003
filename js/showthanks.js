/*A trick here to show my appreciation to these developers:
  As there is no label that has an Id mark near here in HTML, there is an linksHtml div here, and it seems like it was developed to use for cnzz, but it was abandoned?
  So we just need to remove its display:none style and add two of our own p label here to put our own text in, as it is a div itself.
  Here we have to write it as a separate file to override cnblog's a label limit.
*/
window.onload = function(){
  document.getElementById("linksHtml").style = "";
  document.getElementById("linksHtml").innerHTML = "\n<p>Cnblogs theme powered by <a href=\"https://github.com/BNDong/Cnblogs-Theme-SimpleMemory\">Cnblogs-Theme-SimpleMemory</a> Written by <a href=\"https://www.cnblogs.com/bndong/\">@BNDong</a></p>\n<p>Optimized by <a href=\"https://www.cnblogs.com/izwb003/\">@izwb003</a> as <a href=\"https://github.com/izwb003/Cnblogs-Theme-izwb003\">Cnblogs-Theme-izwb003</a></p>\n<p>Screen pointer powered by <a href=\"https://space.bilibili.com/113477706\">@自且力餐</a> and <a href=\"https://space.bilibili.com/297327046\">@啊哈哈哈哈哈感叹号x3</a> from Bilibili <a href=\"https://www.bilibili.com/video/BV1Ds4y197A1/\">BV1Ds4y197A1</a></p>\n<p>Splatoon and some background images are copyrights of <a href=\"https://splatoon.nintendo.com/\">Nintendo</a></p>";
}
