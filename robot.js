const create = () => {
    return {
        joints: [0, 0, 0, 0, 0, 0],
        async run() {
            while (true) {
                await new Promise(resolve => setTimeout(resolve, 50));
                let time = Date.now() / 1000;
                const amplitude = 90 //deg;
                const frequency = 0.3; //Hz
                const joint_value = Math.sin(time * frequency * Math.PI) * amplitude;

                this.joints[0] = joint_value;
            }
        }
    };
};

module.exports.create = create;