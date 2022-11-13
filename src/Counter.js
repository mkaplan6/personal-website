
const Counter = () => {

const api_key = '';
const channel_id = 'UC8IgBm17Du8PLJbn4k08UjA';
let viewCount = document.getElementById('viewCount');
    
    const channel = fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id${channel_id}&key=${api_key}`)
    viewCount = channel.json.items[0].statistics;
    <div>Howdy</div>
    return viewCount;
};

export default Counter;
