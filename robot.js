const create = () => {
    return {
        joints: [0, 0, 0, 0, 0, 0],
        async run() {
            while (true) {
                await new Promise(resolve => setTimeout(resolve, 10));
                let time = Date.now() / 1000;

                // peak-to-peak in degrees
                const amplitudes = [
                    90,
                    20,
                    15,
                    60,
                    45,
                    90,
                ];

                // frequency in Hz
                const frequencies = [
                    0.1,
                    0.2,
                    0.3,
                    0.3,
                    0.2,
                    0.1,
                ];
                const calculate_joint_value = (time, frequency, amplitude) => {
                    return Math.sin(time * frequency * Math.PI) * amplitude;
                };

                for (i = 0; i < 6; i++) {
                    this.joints[i] = calculate_joint_value(time, frequencies[i], amplitudes[i]);
                }

            }
        }
    };
};

module.exports.create = create;