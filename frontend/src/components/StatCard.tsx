import { Card, CardContent } from './ui/Card';

export default function StatCard({ icon, label, value, sub, colorClass = 'text-primary-500', glow = false }: any) {
  return (
    <Card className={`flex-1 min-w-[140px] transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-800/50 ${glow ? 'shadow-md dark:shadow-slate-800' : ''}`}>
      <CardContent className="p-5">
        <div className="text-2xl mb-2">{icon}</div>
        <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.1em] uppercase mb-1 font-medium">{label}</div>
        <div className={`font-outfit text-3xl font-bold leading-none tracking-tight ${colorClass}`}>{value}</div>
        {sub && <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">{sub}</div>}
      </CardContent>
    </Card>
  )
}


