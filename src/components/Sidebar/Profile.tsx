import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/VitorNasBr.png"
        alt=""
        className="h-10 h-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Vitor Medina
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          vitornas02@gmail.com
        </span>
      </div>
      <Button type="button" variant='ghost'>
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
