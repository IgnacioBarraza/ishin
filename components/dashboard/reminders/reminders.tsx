import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Check, Clock, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const initialReminders = [
  { id: 1, title: 'Tomar Omeprazol', time: '08:00', completed: false },
  { id: 2, title: 'Tomar Vitamina D', time: '08:00', completed: false },
  { id: 3, title: 'Medir presión arterial', time: '12:00', completed: false },
  { id: 4, title: 'Registrar peso', time: '20:00', completed: false },
]

export function Reminders() {
  const [showAdd, setShowAdd] = useState(false)
  const [reminders, setReminders] = useState(initialReminders)
  const [newReminder, setNewReminder] = useState({ title: '', time: '08:00' })

  const toggleComplete = (id: number) => {
    setReminders(
      reminders.map((r) =>
        r.id === id ? { ...r, completed: !r.completed } : r,
      ),
    )
    const reminder = reminders.find((r) => r.id === id)
    toast.success(
      reminder?.completed ? 'Recordatorio pendiente' : '¡Completado!',
    )
  }

  const handleAdd = () => {
    if (!newReminder.title) return
    setReminders([
      ...reminders,
      { id: Date.now(), ...newReminder, completed: false },
    ])
    setNewReminder({ title: '', time: '08:00' })
    setShowAdd(false)
    toast.success('Recordatorio agregado')
  }

  return (
    <div className="widget-panel">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground">
          Recordatorios de hoy
        </h3>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        {reminders.map((reminder, index) => (
          <div
            key={reminder.id}
            className={`flex items-center gap-3 p-2 rounded-lg transition-colors animate-fade-up ${reminder.completed ? 'opacity-60' : 'hover:bg-muted/50'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => toggleComplete(reminder.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                reminder.completed
                  ? 'bg-accent border-accent'
                  : 'border-border hover:border-primary'
              }`}
            >
              {reminder.completed && (
                <Check className="h-3 w-3 text-accent-foreground" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm ${reminder.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}
              >
                {reminder.title}
              </p>
            </div>
            <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
              <Clock className="h-3 w-3" />
              {reminder.time}
            </span>
          </div>
        ))}
      </div>
      {showAdd ? (
        <div className="mt-4 p-3 rounded-lg bg-muted/50 space-y-2">
          <Input
            placeholder="Nombre del recordatorio"
            value={newReminder.title}
            onChange={(e) =>
              setNewReminder({ ...newReminder, title: e.target.value })
            }
          />
          <div className="flex gap-2">
            <Input
              type="time"
              value={newReminder.time}
              onChange={(e) =>
                setNewReminder({ ...newReminder, time: e.target.value })
              }
              className="flex-1"
            />
            <Button size="sm" onClick={handleAdd}>
              Agregar
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setShowAdd(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-4"
          onClick={() => setShowAdd(true)}
        >
          Agregar recordatorio
        </Button>
      )}
    </div>
  )
}
