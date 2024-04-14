class Statistics{
    static mean(data_set){
        return new Promise((resolve, reject)=>{
            try{
                
                const data_length = data_set.length;
                let total_sum = 0;

                for(const data of data_set){
                    total_sum += data;
                }

                const mean = total_sum/data_length;
                resolve(mean);

            }catch(error){
                reject(error);
            }
        })
    }

    static standardDeviation(data_set, mean){
        return new Promise((resolve, reject)=>{
            try{
                let total = 0;

                for(const data of data_set){
                    let mean_diff = data - mean
                    let squared = mean_diff ** 2;
                    total += squared;
                }

                const mean_squared_diff = total/data_set.length;
                const standard_deviation = Math.sqrt(mean_squared_diff);

                resolve(standard_deviation);
            }catch(error){
                reject(error);
            }
        })
    }

    static rangeMin(data_set){
        return new Promise((resolve, reject)=>{
            try{
                const range_min = Math.min(...data_set);
                resolve(range_min);
            }catch(error){
                reject(error);
            }
        })
    }

    static rangeMax(data_set){
        return new Promise((resolve, reject)=>{
            try{
                const range_max = Math.max(...data_set);
                resolve(range_max);
            }catch(error){
                reject(error);
            }
        })
    }

    static cvPercent(SD,mean){
        return new Promise((resolve, reject)=>{
            try{
                const cv_percent = (SD/mean) * 100;
                resolve(cv_percent);
            }catch(error){
                reject(error);
            }
        })
    }

    static percentile5th(data_set){
        return new Promise((resolve, reject)=>{
            try{
                const sorted_list = data_set.sort();
                const product = 0.05*sorted_list.length;
                const rounded_num = Math.round(product);
                const percentile_5th = rounded_num > 0 ? sorted_list[rounded_num - 1] : sorted_list[rounded_num];
                resolve(percentile_5th);
            }catch(error){
                reject(error);
            }
        })
    }

    static percentile50th(data_set){
        return new Promise((resolve, reject)=>{
            try{
                const sorted_list = data_set.sort();
                const product = 0.5*sorted_list.length;
                const rounded_num = Math.round(product);
                const percentile_50th = rounded_num > 0 ? sorted_list[rounded_num - 1] : sorted_list[rounded_num];
                resolve(percentile_50th);
            }catch(error){
                reject(error);
            }
        })
    }

    static percentile95th(data_set){
        return new Promise((resolve, reject)=>{
            try{
                const sorted_list = data_set.sort();
                const product = 0.95*sorted_list.length;
                const rounded_num = Math.round(product);
                const percentile_95th = rounded_num > 0 ? sorted_list[rounded_num - 1] : sorted_list[rounded_num];
                resolve(percentile_95th);
            }catch(error){
                reject(error);
            }
        })
    }

    static mode(data_set){
        return new Promise((resolve, reject)=>{
            try{
                let frequency = {};

                data_set.forEach(function (element) {
                    frequency[element] = (frequency[element] || 0) + 1;
                });

                let mode = 0;
                let maxFrequency = 0;
                for (const key in frequency) {
                    if (frequency[key] > maxFrequency) {
                        mode = key;
                        maxFrequency = frequency[key];
                    }
                }

                resolve(mode)
            }catch(error){
                reject(error);
            }
        })
    }
}

module.exports = Statistics;