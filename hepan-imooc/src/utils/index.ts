// 格式化金钱
export const formatMoney = (num: number | string) => {
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', {style: "currency", currency: "CNY"})
}

// 使用正则格式化数字

// 格式化日期

export const formatDate = (date?: Date, rules?: string) => {
  let currentDate = new Date()
  if (date) currentDate = date
  if (rules === "yyyy-MM-dd") currentDate.toLocaleDateString()
  if (rules === "HH:mm:sss") currentDate.toLocaleTimeString()
  return currentDate.toLocaleString()
}
export default {formatMoney, formatDate}
