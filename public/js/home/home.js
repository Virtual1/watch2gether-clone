const errorEl = document.getElementById('error')
const errorText = document.getElementById('error__text')

if (sessionStorage.getItem('socket_disconnect_error')) {
    sessionStorage.removeItem('socket_disconnect_error')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Disconnected from room. Please try again or contact me!"

} else if (sessionStorage.getItem('socket_reconnect_error')) {
    sessionStorage.removeItem('socket_reconnect_error')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Something went wrong while reconnecting to room. Please try again or contact me!"

}  else if (sessionStorage.getItem('socket_connection_limit')) {
    sessionStorage.removeItem('socket_connection_limit')

    errorEl.classList.remove('d-none')
    errorText.innerText = "You can only be connected to one room at a time."

}  else if (sessionStorage.getItem('socket_user_limit')) {
    sessionStorage.removeItem('socket_user_limit')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Disconnected from room due to maximum user limit."

}  else if (sessionStorage.getItem('socket_connection_ban')) {
    sessionStorage.removeItem('socket_connection_ban')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Slow down. Banned due too many requests. Try again in one hour!"

}  else if (sessionStorage.getItem('socket_invalid_input')) {
    sessionStorage.removeItem('socket_invalid_input')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Something went wrong. Try again or contact me!"

} else if (sessionStorage.getItem('browser_not_supported')) {
    sessionStorage.removeItem('browser_not_supported')

    errorEl.classList.remove('d-none')
    errorText.innerText = "Your browser does not support our video player. Please update your browser!"

} else if (sessionStorage.getItem('socket_user_kick')) {
    sessionStorage.removeItem('socket_user_kick')

    errorEl.classList.remove('d-none')
    errorText.innerText = "You have been kicked from the room."

} else if (sessionStorage.getItem('socket_user_ban')) {
    sessionStorage.removeItem('socket_user_ban')

    errorEl.classList.remove('d-none')
    errorText.innerText = "You have been banned from the room."
}
