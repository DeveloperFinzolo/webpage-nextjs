import { TrendingUp, PiggyBank, Shield, BarChart3 } from "lucide-react";
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
        slug: "financial-planning",
        icon: TrendingUp,
        title: "Financial Planning",
        shortDesc: "Build a comprehensive financial roadmap tailored to your life goals and risk tolerance.",
        fullDesc: "Our financial planning service helps you navigate life's financial complexities with clarity and confidence.",
        features: ["Comprehensive financial assessment", "Goal-based planning strategies", "Cash flow management", "Tax-efficient strategies", "Regular progress reviews"],
    },
    {
        slug: "investment-management",
        icon: BarChart3,
        title: "Investment Management",
        shortDesc: "Grow your wealth through disciplined, evidence-based investment strategies.",
        fullDesc: "We manage your investment portfolio with a focus on long-term growth, diversification, and risk management.",
        features: ["Portfolio construction & diversification", "Risk-adjusted returns", "Ongoing portfolio rebalancing", "ESG investing options", "Performance reporting"],
    },
    {
        slug: "retirement-planning",
        icon: PiggyBank,
        title: "Retirement Planning",
        shortDesc: "Secure your future with a retirement strategy designed for the life you envision.",
        fullDesc: "Our retirement planning specialists help you define what retirement means to you and create a structured plan.",
        features: ["Retirement income projections", "401(k) & IRA optimization", "Social Security strategy", "Healthcare cost planning", "Legacy & estate planning"],
    },
    {
        slug: "investment-analysis",
        icon: TrendingUp,
        title: "Investment Analysis",
        shortDesc: "Data-driven insights to make smarter investment decisions with confidence.",
        fullDesc: "We provide in-depth research and analysis of investment opportunities backed by solid data.",
        features: ["Market research & analysis", "Fundamental & technical review", "Sector & industry insights", "Risk assessment reports", "Custom investment reports"],
    },
    {
        slug: "insurance",
        icon: Shield,
        title: "Insurance",
        shortDesc: "Protect everything you've built with comprehensive coverage tailored to your needs.",
        fullDesc: "We evaluate your existing coverage and recommend insurance strategies that protect your income and assets.",
        features: ["Life insurance analysis", "Disability income protection", "Long-term care planning", "Business insurance review", "Annuity solutions"],
    },
];