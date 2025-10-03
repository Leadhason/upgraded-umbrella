"use client"

import { TrendingUp, Calendar, ArrowRight, Clock, CheckCircle } from "lucide-react"

interface TransferActivity {
  id: string
  playerName: string
  type: "completed" | "pending" | "rumored"
  fromClub: string
  toClub: string
  transferFee: string
  date: string
  status: string
  league: string
}

interface MarketStats {
  totalTransfers: number
  totalValue: string
  averageValue: string
  successRate: string
}

const recentActivity: TransferActivity[] = [
  {
    id: "rashford-extension",
    playerName: "Marcus Rashford",
    type: "completed",
    fromClub: "Manchester United",
    toClub: "Manchester United",
    transferFee: "€70M",
    date: "July 2024",
    status: "Contract Extension Completed",
    league: "Premier League"
  },
  {
    id: "saka-renewal",
    playerName: "Bukayo Saka", 
    type: "completed",
    fromClub: "Arsenal FC",
    toClub: "Arsenal FC",
    transferFee: "€65M",
    date: "June 2024",
    status: "Long-term Extension Signed",
    league: "Premier League"
  },
  {
    id: "chiesa-liverpool",
    playerName: "Federico Chiesa",
    type: "completed",
    fromClub: "Juventus",
    toClub: "Liverpool FC",
    transferFee: "€13M",
    date: "August 2024",
    status: "Transfer Completed",
    league: "Premier League"
  },
  {
    id: "pulisic-milan",
    playerName: "Christian Pulisic",
    type: "completed",
    fromClub: "Chelsea FC",
    toClub: "AC Milan",
    transferFee: "€22M",
    date: "July 2023",
    status: "Successful Integration",
    league: "Serie A"
  },
  {
    id: "haaland-renewal",
    playerName: "Erling Haaland",
    type: "pending",
    fromClub: "Manchester City",
    toClub: "Manchester City",
    transferFee: "€100M",
    date: "January 2025",
    status: "Extension Negotiations",
    league: "Premier League"
  },
  {
    id: "modric-future",
    playerName: "Luka Modric",
    type: "rumored",
    fromClub: "Real Madrid",
    toClub: "MLS Club",
    transferFee: "€15M",
    date: "Summer 2025",
    status: "Exploring Options",
    league: "MLS"
  }
]

const marketStats: MarketStats = {
  totalTransfers: 24,
  totalValue: "€450M",
  averageValue: "€18.8M",
  successRate: "96%"
}

export function TransferMarketActivity() {
  const getStatusColor = (type: string) => {
    switch (type) {
      case "completed": return "text-green-500 border-green-500/30 bg-green-500/10"
      case "pending": return "text-yellow-500 border-yellow-500/30 bg-yellow-500/10"
      case "rumored": return "text-blue-500 border-blue-500/30 bg-blue-500/10"
      default: return "text-white/70 border-white/20 bg-white/5"
    }
  }

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "completed": return <CheckCircle className="h-4 w-4" />
      case "pending": return <Clock className="h-4 w-4" />
      case "rumored": return <TrendingUp className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            TRANSFER MARKET ACTIVITY
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Stay updated with our latest transfer activities, contract negotiations, and market movements. 
            Our active presence in the transfer market speaks to our industry influence.
          </p>
        </div>

        {/* Market Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-red-500 md:text-3xl">{marketStats.totalTransfers}</div>
              <p className="text-sm text-white/80">Total Transfers (2024)</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/5 p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-white md:text-3xl">{marketStats.totalValue}</div>
              <p className="text-sm text-white/80">Total Value</p>
            </div>
            <div className="rounded-lg border border-white/20 bg-white/5 p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-white md:text-3xl">{marketStats.averageValue}</div>
              <p className="text-sm text-white/80">Average Value</p>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-6 text-center">
              <div className="mb-2 text-2xl font-bold text-green-500 md:text-3xl">{marketStats.successRate}</div>
              <p className="text-sm text-white/80">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white md:text-2xl">Recent Activity</h3>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                className="group rounded-lg border border-white/20 bg-black/20 p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-black/30"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  {/* Player & Transfer Info */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h4 className="text-lg font-bold text-white">{activity.playerName}</h4>
                      <div className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getStatusColor(activity.type)}`}>
                        {getStatusIcon(activity.type)}
                        {activity.type}
                      </div>
                    </div>

                    {/* Transfer Direction */}
                    <div className="mb-2 flex items-center gap-2 text-white/80">
                      <span className="text-sm">{activity.fromClub}</span>
                      <ArrowRight className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-semibold">{activity.toClub}</span>
                      <span className="text-xs text-white/60">({activity.league})</span>
                    </div>

                    <p className="text-sm text-white/70">{activity.status}</p>
                  </div>

                  {/* Transfer Details */}
                  <div className="flex items-center gap-6 md:flex-col md:items-end">
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-500">{activity.transferFee}</div>
                      <div className="text-xs text-white/60">Transfer Value</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-white/80">
                        <Calendar className="h-4 w-4" />
                        {activity.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-16">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="mb-6 text-xl font-bold text-white md:text-2xl text-center">
              Market Insights
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-3 h-8 w-8 text-red-500" />
                <h4 className="mb-2 text-lg font-semibold text-white">Active Negotiations</h4>
                <p className="text-sm text-white/80">Currently managing 12 active transfer negotiations across Europe</p>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-3 h-8 w-8 text-green-500" />
                <h4 className="mb-2 text-lg font-semibold text-white">Completion Rate</h4>
                <p className="text-sm text-white/80">96% successful completion rate for initiated transfers</p>
              </div>
              <div className="text-center">
                <Calendar className="mx-auto mb-3 h-8 w-8 text-blue-500" />
                <h4 className="mb-2 text-lg font-semibold text-white">Window Performance</h4>
                <p className="text-sm text-white/80">Record-breaking summer 2024 with €180M in completed deals</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}