declare global {
    interface Window {
        guardian?: {
            config?: {
                page?: {
                    section?: string;
                };
            };
        };
    }
}

export {};