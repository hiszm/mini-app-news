<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }

	
	public function getNewsById()
    {	
		$id = I('id');
		$m = M();
		$rs = $m->query('select * from mynews where id='.$id);	
		echo json_encode($rs);
	}
	
	public function getNewsList()
    {	
		$p = I('page');
		$page = ($p!='') ? intval($p) : 1;
        $rows =  5;
  
        $offset = ($page-1)*$rows;
		$m = M();
		$count = $m->query('select count(id) n from mynews');
		$rs = $m->query('select id,title,add_date,poster from mynews limit '.$offset.','.$rows);
		$msg['total'] = $count[0]['n'];
		$msg['list'] = $rs;
		
		echo json_encode($msg);
	}

}