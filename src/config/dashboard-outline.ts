import FA, { FaAddressCard, FaChartArea, FaCloudDownloadAlt, FaCommentAlt, FaConnectdevelop, FaGlobe, FaLink, FaPlug, FaPuzzlePiece, FaQuestion, FaSearch, FaShare, FaTags, FaTasks, FaTh, FaThumbsUp, FaTicketAlt, FaUsers, FaWpforms } from 'react-icons/fa';
import { MdMailOutline, MdOutlineAnalytics, MdOutlineCloudDownload, MdOutlineContactSupport, MdOutlineDomain, MdOutlineExtension, MdOutlineGroup, MdOutlineLabel, MdOutlineLibraryBooks, MdOutlineQuestionAnswer, MdOutlineSelectAll, MdOutlineShare, MdOutlineThumbUp, MdOutlineWeb, MdOutlineWidgets } from 'react-icons/md';
import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [

  ],
  sidebarNav: [
    {
      title: "Collect",
      isTitle: true
    },
    {
      title: "Forms",
      href: "/account/forms",
      icon: MdOutlineSelectAll,
    },
    {
      title: "Import Reviews",
      href: "/account/import-reviews",
      icon: MdOutlineCloudDownload,
    },

    {
      title: "Manage",
      isTitle: true
    },
    {
      title: "Reviews",
      href: "/account/reviews",
      icon: MdOutlineThumbUp,
    },
    {
      title: "Tags",
      href: "/account/tags",
      icon: MdOutlineLabel,
    },
    {
      title: "Integrations",
      href: "/account/integrations",
      icon: MdOutlineExtension,
    },
    {
      title: "Analytics",
      href: "/account/analytics",
      icon: MdOutlineAnalytics,
    },

    {
      title: "Share",
      isTitle: true
    },
    {
      title: "Widgets",
      href: "/account/widgets",
      icon: MdOutlineWidgets,
    },
    {
      title: "Landing Page",
      href: "/account/landing-page",
      icon: MdOutlineWeb,
    },
    {
      title: "Social Sharing",
      href: "/account/social-sharing",
      icon: MdOutlineShare,
    },
    {
      title: "Custom Domain",
      href: "/account/custom-domain",
      icon: MdOutlineDomain,
    },

    // Might move settings to just one page
    // and add the link icon to sidebar footer
    // {
    //   title: "Settings",
    //   isTitle: true
    // },
    // {
    //   title: "Space Settings",
    //   href: "/account/space",
    //   icon: "reviews",
    // },
    // {
    //   title: "Team Management",
    //   href: "/account/teams",
    //   icon: "search",
    // },
    // {
    //   title: "Notifications",
    //   href: "/account/notifications",
    //   icon: "search",
    // },
    // {
    //   title: "Privacy & Security",
    //   href: "/account/security",
    //   icon: "search",
    // },
    // {
    //   title: "Billing",
    //   href: "/account/billing",
    //   icon: "search",
    // },

    {
      title: "Help & Support",
      isTitle: true
    },
    {
      title: "Knowledge Base",
      href: "/account/knowledge-base",
      icon: MdOutlineLibraryBooks,
    },
    {
      title: "FAQ",
      href: "/account/faq",
      icon: MdOutlineQuestionAnswer,
    },
    {
      title: "Support Ticket",
      href: "/account/support",
      icon: MdOutlineContactSupport,
    },
    {
      title: "Community",
      href: "/account/community-forum",
      icon: MdOutlineGroup,
    },
    {
      title: "Contact Us",
      href: "/account/contact-us",
      icon: MdMailOutline,
    },
  ],
}
/**
 * Second version
 */


// SETTINGS

// Profile

// Account Info
// Profile Info
// Notifications

// Branding

// Logo & Colors
// Customizable Templates

// Integrations

// Google Analytics
// Zapier
// Slack
// Salesforce
// HubSpot

// Team

// Team Management
// User Roles & Permissions
// Collaboration
// HELP & SUPPORT

// Knowledge Base

// FAQs
// Video Tutorials
// User Guides

// Support

// Live Chat
// Email Support
// Phone Support

// Feedback

// User Voice
// Feature Requests
