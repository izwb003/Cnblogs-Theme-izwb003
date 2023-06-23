/*A trick here to show my appreciation to these developers:
  As there is no label that has an Id mark near here in HTML, there is an linksHtml div here, and it seems like it was developed to use for cnzz, but it was abandoned?
  So we just need to remove its display:none style and add our own p label here to put our own text in, as it is a div itself.
  Here we have to write it as a separate file to override cnblog's a label limit.
*/
window.onload = function(){
  document.getElementById("linksHtml").style = "";
  document.getElementById("linksHtml").innerHTML = "\n<p>Cnblogs theme powered by <a href=\"https://github.com/BNDong/Cnblogs-Theme-SimpleMemory\">Cnblogs-Theme-SimpleMemory</a> Written by <a href=\"https://www.cnblogs.com/bndong/\">@BNDong</a></p>\n<p title=\"Any adjustments made to it are based on the author's declared use of the MIT License.\n对其所进行的任何调整基于原作者所声明的其使用MIT License.\">Optimized by <a href=\"https://www.cnblogs.com/izwb003/\">@izwb003</a> as <a href=\"https://github.com/izwb003/Cnblogs-Theme-izwb003\">Cnblogs-Theme-izwb003</a></p>\n<p title=\"The portrait avatar was personally drawn by this friend for me. I have an obligation to declare the protection of the copyright of her creations. Therefore, without her own permission, this avatar is prohibited from being copied, distributed, or used for any purpose in any form.\n该头像由这位朋友亲自为我绘制。我有义务在此声明对她创作的版权的保护。故未经她本人允许，该头像禁止以任何形式被复制、分发或用于任何用途。\">Calamari avatar exclusively drawn by <a href=\"https://space.bilibili.com/162775917\">@イケメン狗</a> from Bilibili <strong>*Prohibited for other purposes*</strong></p>\n<p>Screen pointer powered by <a href=\"https://space.bilibili.com/113477706\">@自且力餐</a> and <a href=\"https://space.bilibili.com/297327046\">@啊哈哈哈哈哈感叹号x3</a> from Bilibili <a href=\"https://www.bilibili.com/video/BV1Ds4y197A1/\">BV1Ds4y197A1</a></p>\n<p>Splatoon and some background images are copyrights of <a href=\"https://splatoon.nintendo.com/\">Nintendo</a></p>";
}
