import AssetPic from "../assets/images/asset_5155781.png";
import AccountPic from "../assets/images/accounting_3908365.png";
import PieChartPic from "../assets/images/pie-chart_7441682.png";

const services = [
  {
    title: "注册公司",
    titleEn: "Register company",
    list: [
      "一站式注册公司服务",
      "迅速快捷，最快3天",
      "全程免费，无额外费用"
    ],
    illustration: AssetPic
  },
  {
    title: "代理记账",
    titleEn: "Bookkeeping as agent",
    list: [
      "处理企业的财务记录，确保了企业的财务数据准确无误",
      "协助企业遵守相关法规，减少潜在法律风险"
    ],
    illustration: AccountPic
  },
  {
    title: "税务咨询",
    titleEn: "Tax",
    list: [
      "税收政策的深入了解,税收优惠减免和其他潜在的经济激励",
      "根据业务类型和需求，提供定制化的税收咨询方案"
    ],
    illustration: PieChartPic
  }
];

export {
  services
};
