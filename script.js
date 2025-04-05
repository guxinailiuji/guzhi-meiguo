// Add any javascript you might need here.

// 为百分比和成分股添加闪烁效果
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有显示百分比的元素
  const percentElements = document.querySelectorAll('.ml-2.text-sm.font-medium');
  
  // 为百分比元素添加闪烁效果
  percentElements.forEach(element => {
    if (element.textContent.includes('%')) {
      element.classList.add('color-blink');
    }
  });
  
  // 查找表格中的百分比
  const tableCells = document.querySelectorAll('td');
  tableCells.forEach(cell => {
    if (cell.textContent.includes('%')) {
      cell.classList.add('color-blink');
    }
  });
  
  // 获取所有成分股标签
  const stockElements = document.querySelectorAll('[class*="rounded-full text-sm"]');
  
  // 为成分股标签添加闪烁效果
  stockElements.forEach(element => {
    element.classList.add('blink');
  });
});
