import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const data = [
  { date: 'Lun', sistolica: 118, diastolica: 78, pulso: 70 },
  { date: 'Mar', sistolica: 122, diastolica: 80, pulso: 72 },
  { date: 'Mié', sistolica: 120, diastolica: 79, pulso: 68 },
  { date: 'Jue', sistolica: 125, diastolica: 82, pulso: 75 },
  { date: 'Vie', sistolica: 119, diastolica: 78, pulso: 71 },
  { date: 'Sáb', sistolica: 121, diastolica: 80, pulso: 69 },
  { date: 'Dom', sistolica: 120, diastolica: 80, pulso: 72 },
]

export function VitalsChart() {
  return (
    <div className="widget-panel">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">
          Tendencia Semanal
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Sistólica
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Diastólica
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-ishin-gold" />
            Pulso
          </span>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={false}
              domain={[60, 140]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="sistolica"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 3, fill: 'hsl(var(--primary))' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="diastolica"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={{ r: 3, fill: 'hsl(var(--accent))' }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="pulso"
              stroke="hsl(var(--gold))"
              strokeWidth={2}
              dot={{ r: 3, fill: 'hsl(var(--gold))' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Datos de los últimos 7 días. Solo para referencia personal.
      </p>
    </div>
  )
}
