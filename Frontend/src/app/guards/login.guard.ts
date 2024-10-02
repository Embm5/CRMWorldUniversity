import { inject } from '@angular/core'
import { Router } from '@angular/router'

export const loginGuard = (): boolean => {
    const router = inject(Router)
    if (localStorage.getItem('token')) {
        return true
    } else {
        router.navigate([''])
        return false
    }
}

export const adminGuard = (): boolean => {
    const router = inject(Router)
    if (localStorage.getItem('rol') === 'administrator') {
        return true
    } else {
        return false
    }
}
export const teacherGuard = (): boolean => {
    const router = inject(Router)
    if ( localStorage.getItem('rol') === 'teacher') {
        return true
    } else {
        router.navigate([''])
        return false
    }
}
export const staffGuard = (): boolean => {
    const router = inject(Router)
    if (localStorage.getItem('rol') ==='staff') {
        return true
    } else 
    {
        router.navigate([''])
        return false   
    }
}
export const studentGuard = (): boolean => {
    const router = inject(Router)
    if (localStorage.getItem('rol') ==='student') {
        return true
    } else {
        router.navigate([''])
        return false
    }
}