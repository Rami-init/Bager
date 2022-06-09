import { useCallback, useState } from 'react'

const useDailogModal = ( Component ) => {
  const [open, setOpen] = useState(false)
  const openDailog = useCallback(()=>{
      setOpen(true)
  }, [])
  const DialogComponent = useCallback(({ ...props })=>{
      if(!open) return null;
      if(Component) {
          return (
              <Component open={open} onClose={()=>setOpen(false)} { ...props} />
          )
      }
  }, [open, Component])
  return [DialogComponent, openDailog]
}

export default useDailogModal