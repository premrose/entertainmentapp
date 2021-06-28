import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }
  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }
  public videos = [
    {
      title: 'Video 1',
      desc: 'Video description goes here',
      id: 'ezbndunlndiftxcfybhionienilanzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012',

    },
    {
      title: 'Video 2',
      desc: 'Video description goes here',
      id: 'ezbndunlndicyvubjnmfonienssazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 3',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonxrycbijnoienfdsilanzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 4',
      desc: 'Video description goes here',
      id: 'ezbndunlndifoniecytvbhijnonfdssssazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 5',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienqwdgthjilgefdsanzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 6',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonieyugredsnssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 7',
      desc: 'Video description goes here',
      id: 'aezbndunlndivgbhfotgfrdsnienssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 8',
      desc: 'Video description goes here',
      id: 'bezbndunlndifoniytgyrgtfdshjoenssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 9',
      desc: 'Video description goes here',
      id: 'cezbndunlndifonienssrefyujghdstxcfybhinjdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 10',
      desc: 'Video description goes here',
      id: 'dezbndunlndifonienssrefdtygrfdsazdnzkdnirdtfgyhujozn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 11',
      desc: 'Video description goes here',
      id: 'eezbndunlnditrcybunofoniutewhgdsfnssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 12',
      desc: 'Video description goes here',
      id: 'fezbndunlndifonienssrefdahgdsaRFzdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 13',
      desc: 'Video description goes here',
      id: 'aezbndunlndidftuiojipfoniYUTDSWAenssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 14',
      desc: 'Video description goes here',
      id: 'bezbndunlndir5ctbunoifoni6ruewryawenssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 15',
      desc: 'Video description goes here',
      id: 'cezbndunlndidcybujmpkfonisrqdagrlenssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 16',
      desc: 'Video description goes here',
      id: 'dezbndunlndifonienssrdctgltrydtsfbhjiefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 17',
      desc: 'Video description goes here',
      id: 'eezbndunlndi5exthujyvbettaebdsaiuipfonienssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    },
    {
      title: 'Video 18',
      desc: 'Video description goes here',
      id: 'fezbndunlndifonienssrefdxzextcvbunimotcrvybunmiopazdnzkdnizn',
      thumbnailSrc: '../../assets/images/v.jpg',
      mediaSrc: '../../assets/images/vd.mp4',
      Date:'12/12/2012'
    }
  ]

  public favourites = ['ezbndunlndiftxcfybhionienilanzkdnizn']


  isfavourite(videoId: String) {
    return this.favourites.filter(v => v == videoId).length == 1 ? true : false;
  }

  removeFavourite(videoId: string) {
    this.favourites.splice(this.favourites.indexOf(videoId), 1);
  }

  setFavourite(videoId: string) {
    this.favourites.push(videoId);
  }

}