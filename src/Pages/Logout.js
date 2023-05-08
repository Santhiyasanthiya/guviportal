import React from 'react'

export function Logout(){                            
    localStorage.removeItem("token");
    window.location.href="/"
} 