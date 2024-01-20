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

export function getTodalData(records) {
  const result = records.salesData.map((item) => {
    return {
      name: item.product,
      data: item.sales.reduce(
        (acc, itm) => ({ ...acc, [`${itm.month}`]: itm.amount }),
        {}
      ),
    };

  });

  const result2 = result.map((item)=>{return {item.name, ...item.data}})

  console.log(result);
}

export default data;
