const create = () => {
    return {
        joints: [0, 0, 0, 0, 0, 0],
        async run() {
            //while (true) {
            let time = Date.now() / 1000;
            this.joints[0] = time;
            //}
        }
    };
};

module.exports.create = create;