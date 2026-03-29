import { TrendingUp, PiggyBank, Shield, BarChart3, AlignEndHorizontalIcon } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
    slug: string;
    icon: LucideIcon;
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
}

export const services: Service[] = [
    {
        slug: "wealth-management",
        icon: TrendingUp,
        title: "Wealth Management",
        shortDesc: "Personalized solutions to grow, protect, and optimize your wealth over the long term.",
        fullDesc: "At Finzolo InvestTech, we provide personalized wealth management solutions designed to help investors grow, protect, and optimize their wealth over the long term. Our approach combines strategic planning, deep market research, and disciplined investment execution to align every investment decision with your financial goals. We focus on sustainable wealth creation through structured investment strategies, risk management, and continuous portfolio oversight.",
        features: [
            "Strategic financial planning",
            "Deep market research & analysis",
            "Disciplined investment execution",
            "Risk management framework",
            "Continuous portfolio oversight",
            "Sustainable wealth creation strategies",
        ],
    },
    {
        slug: "asset-management",
        icon: BarChart3,
        title: "Asset Management",
        shortDesc: "Actively managed equity portfolios focused on long-term capital growth.",
        fullDesc: "At Finzolo InvestTech, our Equity Asset Management service is designed to deliver long-term capital growth through actively managed equity portfolios. We combine fundamental research, market intelligence, and disciplined portfolio construction to create investment strategies focused on sustainable performance. Our objective is simple — identify quality businesses, invest with conviction, and manage portfolios with a long-term wealth creation mindset.",
        features: [
            "Actively managed equity portfolios",
            "Fundamental research & analysis",
            "Market intelligence integration",
            "Disciplined portfolio construction",
            "Quality business identification",
            "Long-term wealth creation focus",
        ],
    },
    {
        slug: "long-term-investment",
        icon: PiggyBank,
        title: "Long-Term Financial Investment Services",
        shortDesc: "Disciplined investing and strategic planning for sustainable wealth creation.",
        fullDesc: "At Finzolo, we believe true wealth is created through disciplined investing, strategic planning, and long-term vision — not short-term market speculation. Our Long-Term Financial Investment Management service focuses on helping investors grow and preserve wealth through structured investment strategies aligned with individual financial goals, risk tolerance, and market opportunities. We combine deep market research, portfolio discipline, and risk management to deliver consistent long-term value creation.",
        features: [
            "Disciplined investing framework",
            "Strategic long-term planning",
            "Goal-aligned investment strategies",
            "Risk tolerance assessment",
            "Deep market research",
            "Portfolio discipline & oversight",
            "Consistent value creation",
        ],
    },
];

// export const services: Service[] = [
//     {
//         slug: "financial-planning",
//         icon: TrendingUp,
//         title: "Financial Planning",
//         shortDesc: "Build a comprehensive financial roadmap tailored to your life goals and risk tolerance.",
//         fullDesc: "Our financial planning service helps you navigate life's financial complexities with clarity and confidence.",
//         features: ["Comprehensive financial assessment", "Goal-based planning strategies", "Cash flow management", "Tax-efficient strategies", "Regular progress reviews"],
//     },
//     {
//         slug: "investment-management",
//         icon: BarChart3,
//         title: "Investment Management",
//         shortDesc: "Grow your wealth through disciplined, evidence-based investment strategies.",
//         fullDesc: "We manage your investment portfolio with a focus on long-term growth, diversification, and risk management.",
//         features: ["Portfolio construction & diversification", "Risk-adjusted returns", "Ongoing portfolio rebalancing", "ESG investing options", "Performance reporting"],
//     },
//     {
//         slug: "retirement-planning",
//         icon: PiggyBank,
//         title: "Retirement Planning",
//         shortDesc: "Secure your future with a retirement strategy designed for the life you envision.",
//         fullDesc: "Our retirement planning specialists help you define what retirement means to you and create a structured plan.",
//         features: ["Retirement income projections", "401(k) & IRA optimization", "Social Security strategy", "Healthcare cost planning", "Legacy & estate planning"],
//     },
//     {
//         slug: "investment-analysis",
//         icon: TrendingUp,
//         title: "Investment Analysis",
//         shortDesc: "Data-driven insights to make smarter investment decisions with confidence.",
//         fullDesc: "We provide in-depth research and analysis of investment opportunities backed by solid data.",
//         features: ["Market research & analysis", "Fundamental & technical review", "Sector & industry insights", "Risk assessment reports", "Custom investment reports"],
//     },
//     {
//         slug: "insurance",
//         icon: Shield,
//         title: "Insurance",
//         shortDesc: "Protect everything you've built with comprehensive coverage tailored to your needs.",
//         fullDesc: "We evaluate your existing coverage and recommend insurance strategies that protect your income and assets.",
//         features: ["Life insurance analysis", "Disability income protection", "Long-term care planning", "Business insurance review", "Annuity solutions"],
//     },
// ];