let hasSynced = false

export function useDarkMode() {
    const isDarkMode = useState<boolean>('dark-mode', () => false)

    function setDarkMode(dark: boolean) {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.theme = dark ? 'dark' : 'light';
        isDarkMode.value = dark;
    }

    function toggleTheme() {
        setDarkMode(!isDarkMode.value);
    }

    onMounted(() => {
        if (hasSynced) return
        hasSynced = true
        isDarkMode.value = document.documentElement.classList.contains('dark');
    })

    return { isDarkMode, setDarkMode, toggleTheme}
}