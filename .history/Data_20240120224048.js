let data = {
  salesData: [
    {
      product: "Product A",
      sales: [
        { month: "January", amount: 100 },
        { month: "February", amount: 150 },
        { month: "March", amount: 200 },
      ],
    },
    {
      product: "Product B",
      sales: [
        { month: "January", amount: 120 },
        { month: "February", amount: 170 },
        { month: "March", amount: 220 },
      ],
    },
    {
      product: "Product C",
      sales: [
        { month: "January", amount: 90 },
        { month: "February", amount: 130 },
        { month: "March", amount: 180 },
      ],
    },
    {
      product: "Product E",
      sales: [
        { month: "January", amount: 130 },
        { month: "February", amount: 250 },
        { month: "March", amount: 100 },
      ],
    },
    {
      product: "Product F",
      sales: [
        { month: "January", amount: 60 },
        { month: "February", amount: 70 },
        { month: "March", amount: 120 },
      ],
    },
    {
      product: "Product G",
      sales: [
        { month: "January", amount: 40 },
        { month: "February", amount: 110 },
        { month: "March", amount: 60 },
      ],
    },
  ],
};

export function getTotalData(records) {
  const result = records.salesData.map((item) => {
    return {
      name: item.product,
      data: item.sales.reduce(
        (acc, itm) => ({ ...acc, [`${itm.month}`]: itm.amount }),
        {}
      ),
    };
  });

  const finalData = result.map((item) => {
    return { name: item.name, ...item.data };
  });

  return finalData;
}

export function getTotals(records) {
  const result = records.salesData.map((item) => {
    return {
      id: item.product,
      label: item.product,
      value: item.sales.reduce((acc, itm) => acc + itm.amount, 0),
      color: "hsl(271, 70%, 50%)",
    };
  });
  // console.log(result);
  return result;
}

export function getTotal(data) {
  let sumOfMonths = {};
  data.salesData.forEach((product) => {
    product.sales.forEach((sale) => {
      (sumOfMonths.id = sale.month),
        (sumOfMonths.label = sale.month),
        (sumOfMonths[sale.month] =
          (sumOfMonths[sale.month] || 0) + sale.amount),
        (sumOfMonths.color = "hsl(271, 70%, 50%)");
    });
  });
  return [...sumOfMonths];
}

export default data;
