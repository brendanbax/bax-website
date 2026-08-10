export const BRANDS = ['pink', 'lime', 'midnight'] as const
export type Brand = typeof BRANDS[number]

const DEFAULT_BRAND: Brand = 'pink'

export function useBrand() {
    const brand = useState<Brand>('brand', () => DEFAULT_BRAND)

    function setBrand(next: Brand) {
        document.documentElement.dataset.brand = next
        localStorage.brand = next
        brand.value = next
    }

    onMounted(() => {
        const stored = localStorage.brand as Brand | undefined
        brand.value = stored && BRANDS.includes(stored) ? stored : DEFAULT_BRAND
    })

    return { brand, setBrand }
}
