"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const quickLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Status", href: "#" },
]

const resourcesContent = {
  "Documentation": {
    title: "Documentation",
    content: `Welcome to CfxPlayers Documentation

Getting Started
Our fake player service integrates seamlessly with your FiveM server. Follow these simple steps to get started:

1. Purchase a Plan
Select a plan that fits your server's needs from our pricing page. After payment, you'll receive access to your dashboard.

2. Configure Your Server
Add our resource to your server.cfg file and configure the connection settings provided in your dashboard.

3. Set Player Count
Use the dashboard to set your desired fake player count. Changes take effect within seconds.

API Reference
Our RESTful API allows you to programmatically control your fake players:
- GET /api/status - Check service status
- POST /api/players/set - Set player count
- GET /api/players/current - Get current count

For full API documentation, visit your dashboard after purchasing a plan.`
  },
  "Terms of Service": {
    title: "Terms of Service",
    content: `CfxPlayers Terms of Service
Last Updated: May 2026

1. Acceptance of Terms
By using CfxPlayers services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.

2. Service Description
CfxPlayers provides fake player services for FiveM servers. Our service is designed to help boost server visibility and attract real players.

3. User Responsibilities
- You must be at least 18 years old to use our services
- You are responsible for maintaining the security of your account
- You agree not to abuse or exploit our services

4. Payment Terms
- All payments are non-refundable unless stated otherwise
- Prices are subject to change with 30 days notice
- Subscriptions auto-renew unless cancelled

5. Limitation of Liability
CfxPlayers is not liable for any damages arising from the use or inability to use our services. We do not guarantee any specific results from using our service.

6. Termination
We reserve the right to terminate accounts that violate these terms without prior notice.`
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    content: `CfxPlayers Privacy Policy
Last Updated: May 2026

Information We Collect
- Account information (email, username)
- Server connection data
- Payment information (processed securely by Stripe)
- Usage analytics

How We Use Your Information
- To provide and maintain our services
- To process transactions
- To send service updates and notifications
- To improve our services

Data Security
We implement industry-standard security measures to protect your data. All connections are encrypted using SSL/TLS.

Third-Party Services
We use trusted third-party services:
- Stripe for payment processing
- Discord for support communications

Your Rights
- Access your personal data
- Request data deletion
- Opt-out of marketing communications

Contact Us
For privacy concerns, contact support@cfxplayers.com`
  },
  "Discord Community": {
    title: "Discord Community",
    content: `Join the CfxPlayers Discord Community

Our Discord server is the central hub for all CfxPlayers users. Here's what you'll find:

Support Channels
Get help from our team and community members. Our support team typically responds within 1 hour during business hours.

Announcements
Stay updated with the latest features, maintenance schedules, and service updates.

Community Chat
Connect with other FiveM server owners, share tips, and discuss strategies for growing your server.

Exclusive Perks
- Early access to new features
- Community-only discounts
- Direct feedback to developers

Server Rules
- Be respectful to all members
- No spam or self-promotion
- Keep discussions relevant
- Follow Discord's Terms of Service

Click the "Join Our Discord" button on the homepage to receive an invite link, or contact support@cfxplayers.com if you need assistance.`
  }
}

type ResourceKey = keyof typeof resourcesContent

export function Footer() {
  const [openDialog, setOpenDialog] = useState<ResourceKey | null>(null)

  const handleResourceClick = (resourceName: string, e: React.MouseEvent) => {
    if (resourceName in resourcesContent) {
      e.preventDefault()
      setOpenDialog(resourceName as ResourceKey)
    }
  }

  return (
    <footer className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">CfxPlayers</h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              The ultimate tool for enhancing your FiveM server with customizable fake players. Boost your server&apos;s activity and attract more real players.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://discord.gg/cfxplayers" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors">
                <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors">
                <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {Object.keys(resourcesContent).map((resourceName) => (
                <li key={resourceName}>
                  <button
                    onClick={(e) => handleResourceClick(resourceName, e)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                    {resourceName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord Support
                </a>
              </li>
              <li>
                <a href="mailto:support@cfxplayers.com" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  support@cfxplayers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50">
          <p className="text-xs text-zinc-600 text-center">
            &copy; {new Date().getFullYear()} CfxPlayers. All rights reserved.
          </p>
        </div>
      </div>

      {/* Resource Dialogs */}
      {openDialog && (
        <Dialog open={!!openDialog} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-white">
                {resourcesContent[openDialog].title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 text-sm text-zinc-400 whitespace-pre-line leading-relaxed">
              {resourcesContent[openDialog].content}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </footer>
  )
}
